import { app } from 'electron';
import windows from './windows/store';
import createWindow from './windows/create-window';

const mainWindowOptions = {
  width: 800,
  height: 600,
  show: true,
};

(function main() {
  app.on('ready', () => createWindow('main-window', mainWindowOptions));
  app.on('window-all-closed', () => app.quit());
  app.on('activate', () => {
    if (windows['main-window'] === null) {
      createWindow('main-window', mainWindowOptions);
    }
  });
}());
