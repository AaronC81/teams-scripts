/*
Rearranges ETAS formatted names so that they look nicer.

"Christiansen Aaron (ETAS-DAP/XPC-UK)" becomes "Aaron Christiansen (ETAS-DAP/XPC-UK)", with the
organisational unit tag in grey-italics.
*/

const ETAS_NAME_REGEX = /((?:[^ ]+ )+)(\([^\)]+\))/;

setInterval(() => {
    let nameEls = [
        // In Team channels
        ...document.querySelectorAll(".ts-msg-name"),

        // In chat selector sidebar
        ...document.querySelectorAll(".cle-title"),
    ];
    nameEls.forEach(nameEl => {
        // Don't hit the same item more than once
        if (nameEl.getAttribute("prettified"))
            return;

        let match = nameEl.innerText.trim().match(ETAS_NAME_REGEX);
        if (match) {
            let name = match[1].trim();
            let orgTag = match[2].trim();
            
            // Reshuffle name nicely
            // Format appears to be:
            //    <last> <first> <middles...>
            let nameParts = name.split(" ");
            nameParts.push(nameParts.shift());
            let modifiedName = nameParts.join(" ");

            nameEl.innerHTML = `${modifiedName}&nbsp;<i style="color: grey;">${orgTag}</i>`;

            nameEl.setAttribute("prettified", "yes");
        }
    });
}, 100);
