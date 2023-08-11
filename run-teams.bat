taskkill /IM Teams.exe /F
start C:\Users\%USERNAME%\AppData\Local\Microsoft\Teams\current\Teams.exe --remote-debugging-port=12345
sleep 10
node index.js
