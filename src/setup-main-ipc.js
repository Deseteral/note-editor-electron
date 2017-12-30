import { ipcMain } from 'electron';
import { LIBRARY_PATH_LOADED } from './actions/types';
import windows from './windows/store';

function setupMainIpc() {
  ipcMain.on(LIBRARY_PATH_LOADED, () => windows['main-window'].show());
}

export default setupMainIpc;
