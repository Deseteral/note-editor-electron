import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';

let mainWindow: BrowserWindow | null = null;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode === null) {
  enableLiveReload({ strategy: 'react-hmr' });
}

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => mainWindow = null);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
