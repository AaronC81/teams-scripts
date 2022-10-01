// Add a "scripts" button to the bottom of the app list
const spacer = document.querySelector("#teams-app-bar .spacer");
spacer.parentNode.insertBefore(
    ScriptUtils.htmlToNode(`
<li acc-role-dom="appbar-list-item" class="app-list-item">
    <button id="script-button" class="app-bar-link app-bar-button">
        <svg viewBox="0 0 32 32" class="app-svg icons-apps app-bar-extra-icons-fill-colors">
            <text y="21" x="16" fill="#ffffff" stroke-width="0" id="text" font-size="16" font-family="Monospace" text-anchor="middle" xml:space="preserve" font-weight="normal" font-style="normal" stroke="#ffffff">{}</text>
        </svg>
        <span class="app-bar-text">Scripts</span>
    </button>
</li>
`),
    spacer.nextSibling
);
document.getElementById("script-button").onclick = () => (new ScriptUI()).activate();

window.teamsUserScripts = { loadedScripts: [] }
