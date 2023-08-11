/*
Distinguishes "in a meeting" and "in a call" (internally called "on the phone") statuses.

"In a meeting" remains the old red colour, whereas "in a call" becomes the Teams shade of purpley-blue.
*/

let onThePhoneStyleNode = ScriptUtils.htmlToNode(`
    <style>
        .ts-skype-status .on-the-phone {
            /* Copy of default, but re-coloured */
            background-image: url("data:image/svg+xml;charset=utf-8,%0A%3Csvg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2010%2010%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23464EB8%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Eicn_status_ALL%3C%2Ftitle%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M.674%2C2.5A5.031%2C5.031%2C0%2C0%2C1%2C2.5.674%2C4.856%2C4.856%2C0%2C0%2C1%2C5%2C0%2C4.864%2C4.864%2C0%2C0%2C1%2C7.505.674%2C5.038%2C5.038%2C0%2C0%2C1%2C9.326%2C2.5%2C4.861%2C4.861%2C0%2C0%2C1%2C10%2C5a4.861%2C4.861%2C0%2C0%2C1-.674%2C2.505A5.038%2C5.038%2C0%2C0%2C1%2C7.505%2C9.326%2C4.864%2C4.864%2C0%2C0%2C1%2C5%2C10a4.856%2C4.856%2C0%2C0%2C1-2.5-.674A5.031%2C5.031%2C0%2C0%2C1%2C.674%2C7.505%2C4.861%2C4.861%2C0%2C0%2C1%2C0%2C5%2C4.861%2C4.861%2C0%2C0%2C1%2C.674%2C2.5Z%22%2F%3E%3C%2Fsvg%3E") !important;
        }
    </style>
`);
document.querySelector("head").appendChild(onThePhoneStyleNode)
