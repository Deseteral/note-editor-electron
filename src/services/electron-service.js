import { remote } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies, import/extensions

function openLibraryPathDialog() {
  return new Promise((resolve) => {
    const { dialog } = remote;
    const options = {
      title: 'Wybierz folder z biblioteką audiobooków',
      properties: ['openDirectory', 'createDirectory'],
    };

    dialog.showOpenDialog(options, (filePaths) => {
      resolve(filePaths);
    });
  });
}

export {
  openLibraryPathDialog, // eslint-disable-line import/prefer-default-export
};
