import { BrowserWindow } from 'electron';
import windows from './store';

function createWindow(name, options) {
  windows[name] = new BrowserWindow(options);
  windows[name].loadURL(`file://${__dirname}/${name}/index.html`);

  windows[name].setMenu(null);

  windows[name].on('closed', () => {
    windows[name] = null;
  });
}

export default createWindow;
