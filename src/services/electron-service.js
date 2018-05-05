import { remote } from 'electron';

const { dialog } = remote;

function openLibraryPathDialog() {
  return new Promise((resolve, reject) => {
    const options = {
      title: 'Wybierz folder z notatkami',
      properties: ['openDirectory', 'createDirectory'],
    };

    const browserWindow = remote.getCurrentWindow();

    dialog.showOpenDialog(browserWindow, options, (filePaths) => {
      if (filePaths && filePaths[0]) {
        resolve(filePaths[0]);
      } else {
        reject();
      }
    });
  });
}

export {
  openLibraryPathDialog, // eslint-disable-line import/prefer-default-export
};
