import { BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import windows from './store';

async function createWindow(name, options, isDevMode) {
  windows[name] = new BrowserWindow(options);
  windows[name].loadURL(`file://${__dirname}/${name}/index.html`);

  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    await installExtension(REDUX_DEVTOOLS);
    windows[name].webContents.openDevTools();
  }

  windows[name].on('closed', () => {
    windows[name] = null;
  });
}

export default createWindow;
