import { app } from 'electron';
import { enableLiveReload } from 'electron-compile';
import setupMainIpc from './setup-main-ipc';
import windows from './windows/store';
import createWindow from './windows/create-window';

const isDevMode = process.execPath.match(/[\\/]electron/);

const mainWindowOptions = {
  width: 800,
  height: 600,
  show: false,
};

(function main() {
  if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

  app.on('ready', () => createWindow('main-window', mainWindowOptions, isDevMode));
  app.on('window-all-closed', () => app.quit());
  app.on('activate', () => {
    if (windows['main-window'] === null) {
      createWindow('main-window', mainWindowOptions, isDevMode);
    }
  });

  setupMainIpc();
}());
