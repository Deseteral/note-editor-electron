import { remote } from 'electron';

const { dialog, app } = remote;

function openLibraryPathDialog() {
  return new Promise((resolve, reject) => {
    const options = {
      title: 'Wybierz folder z notatkami',
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
  const message = 'Aby korzystać z aplikacji musisz wybrać folder z notatkami';
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
