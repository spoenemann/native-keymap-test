const { app, BrowserWindow } = require('electron')
const keymap = require('native-keymap');

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ width: 640, height: 480 });
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    app.quit();
});

console.log(keymap.getCurrentKeyboardLayout());

keymap.onDidChangeKeyboardLayout(() => {
    console.log(keymap.getCurrentKeyboardLayout());
});
