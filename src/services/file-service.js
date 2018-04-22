import fs from 'fs';

function loadFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}

function saveFile() {

}

export default {
  loadFile,
  saveFile,
};
