const CDP = require('chrome-remote-interface');
const fs = require('fs');

const PORT = 12345;

async function delay(ms) {
    return function(x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}  

async function getWindowTitle(cdpClient) {
    const dom = cdpClient.DOM;
    const documentNodeId = (await dom.getDocument()).root.nodeId;

    try {
        return (await dom.describeNode({
            nodeId: (await dom.querySelector({
                nodeId: documentNodeId,
                selector: "title",
            })).nodeId,
            depth: 2,
        })).node.children[0].nodeValue;
    } catch {
        return undefined;
    }
}

async function waitForLaunch(cdpClient) {
    // Wait for Teams to fully launch
    while (true) {
        const windowTitle = await getWindowTitle(cdpClient);
        if (windowTitle && windowTitle.endsWith("| Microsoft Teams")) {
            break;
        }
        await delay(500);
    }
}

async function main() {
    // Set up our CDP connection
    let client = await CDP({
        port: PORT,
    });

    const { Network, Page, Runtime, DOM } = client;

    await Network.enable();
    await Page.enable();
    await Runtime.enable();
    await DOM.enable();

    // Wait for first launch
    await waitForLaunch(client);

    // Ask Teams to relaunch with more debugging information enabled, which lets us do more!
    // This shouldn't break our debugger connection
    Runtime.evaluate({expression: "angular.reloadWithDebugInfo()"});
    await delay(1000);
    await waitForLaunch(client);

    // Start injecting scripts
    const files = ["client/script_utils.js", "client/script_ui.js", "client/setup.js"];
    files.forEach(file =>
        Runtime.evaluate({expression: fs.readFileSync(file).toString()}));

    // After these, inject user-scripts
    const scriptsDir = `${__dirname}/scripts`;
    fs.readdirSync(scriptsDir).forEach(userScript => {
        userScript = userScript.replace(/\\/, '/');
        Runtime.evaluate({expression: `window.teamsUserScripts.loadedScripts.push("${userScript}")`});
        Runtime.evaluate({expression: fs.readFileSync(`${scriptsDir}/${userScript}`).toString()});
    });
}

main();
