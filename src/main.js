import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';

const isDevMode = process.execPath.match(/[\\/]electron/);
const windows = {
  'main-window': null,
};

const mainWindowOptions = {
  width: 800,
  height: 600,
};

async function createWindow(name, options) {
  windows[name] = new BrowserWindow(options);
  windows[name].loadURL(`file://${__dirname}/windows/${name}/index.html`);

  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    await installExtension(REDUX_DEVTOOLS);
    windows[name].webContents.openDevTools();
  }

  windows[name].on('closed', () => {
    windows[name] = null;
  });
}

(function main() {
  if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

  app.on('ready', () => createWindow('main-window', mainWindowOptions));
  app.on('window-all-closed', () => app.quit());
  app.on('activate', () => {
    if (windows['main-window'] === null) {
      createWindow('main-window', mainWindowOptions);
    }
  });
}());
