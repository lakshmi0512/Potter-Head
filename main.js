const { PythonShell } = require("python-shell");
const path = require("path");

const ipc = require("electron").ipcMain;
console.log("IPC Started!");

const { app, BrowserWindow } = require("electron");

/*
let options =
{
    scriptPath: path.join(__dirname, 'engine/'),
}
PythonShell.run('run.py', options, function (err, results) {
    if (err) throw err;
    if (results == 0) console.log('Script ran successfully')
  });

*/

function createMainWindow() {
  let resultWindow;
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    //webPreferences: {preload: path.join(__dirname, '/gui/index.js')},
    show: false,
    //maximizable: false,
    type: "desktop",
  });
  mainWindow.loadFile(path.join(__dirname, "/gui/index.html"));
  mainWindow.maximize();

  mainWindow.webContents.openDevTools();

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createMainWindow);
