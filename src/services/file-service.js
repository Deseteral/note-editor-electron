import fs from 'fs';
import path from 'path';

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

function saveFile(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

function createFile(directory, name) {
  return new Promise((resolve, reject) => {
    const filePath = `${path.join(directory, name)}.md`;
    const fileContent = `# ${name}`;

    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        path: filePath,
        filename: name,
      });
    });
  });
}

export default {
  loadFile,
  saveFile,
  createFile,
};
