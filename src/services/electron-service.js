import { remote } from 'electron'; // eslint-disable-line import/no-extraneous-dependencies, import/extensions

const { dialog, app } = remote;

function openLibraryPathDialog() {
  return new Promise((resolve, reject) => {
    const options = {
      title: 'Wybierz folder z biblioteką audiobooków',
      properties: ['openDirectory', 'createDirectory'],
    };

    dialog.showOpenDialog(options, (filePaths) => {
      if (filePaths && filePaths[0]) {
        resolve(filePaths[0]);
      } else {
        reject();
      }
    });
  });
}

function openMissingLibraryPathMessageBox() {
  const title = 'Brak folderu biblioteki';
  const message = 'Aby korzystać z aplikacji musisz wybrać folder z biblioteką audiobooków';
  const options = {
    type: 'error',
    title,
    message: title,
    detail: message,
    buttons: ['OK'],
  };

  dialog.showMessageBox(options, () => app.quit());
}

export {
  openLibraryPathDialog,
  openMissingLibraryPathMessageBox,
};
