const { app, BrowserWindow, ipcMain, shell, powerSaveBlocker } = require('electron');
const path = require('path');

let powerSaveBlockerId;

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    },
    resizable: true,
    autoHideMenuBar: true
  });

  win.loadFile('index.html');

  // Handle 'open-explorer' event
  ipcMain.handle('open-explorer', () => {
    const folderPath = path.join(__dirname, 'theme'); // Change this to the desired folder path
    shell.openPath(folderPath);
  });

  // Handle 'open-url' event
  ipcMain.handle('open-url', (event, url) => {
    shell.openExternal(url);
  });
}

app.whenReady().then(() => {
  powerSaveBlockerId = powerSaveBlocker.start('prevent-display-sleep');
  console.log(`Power save blocker started with ID: ${powerSaveBlockerId}`);

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (powerSaveBlocker.isStarted(powerSaveBlockerId)) {
    powerSaveBlocker.stop(powerSaveBlockerId);
    console.log(`Power save blocker stopped with ID: ${powerSaveBlockerId}`);
  }

  if (process.platform !== 'darwin') {
    app.quit();
  }
});

console.log("Built by Tiwa");
