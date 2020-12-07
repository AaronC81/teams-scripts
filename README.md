# teams-scripts

This is an **extremely experimental and currently non-functional** project for
adding a basic "user script" system to Microsoft Teams, so that you can
customise the look, feel and behaviour of Teams as much as you like!

## What does it do right now?

Not a lot! All it can do right now is add a button to Teams' sidebar which
opens a modal:

![The "Scripts" button in the Teams sidebar](img/button.png)

But this shows it's possible to easily execute arbitrary scripts within Teams.

## How do I use it?

First, `npm install`.

Then, if you're on *nix, `./run-teams` should be all you need!

Anywhere else:

    - Make sure Teams isn't running (not even in the background)
    - Start it with the command-line argument `--remote-debugging-port=12345`
    - Wait a few seconds
    - `node index.js`
