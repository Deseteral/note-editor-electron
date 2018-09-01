import path from 'path';
import shortid from 'shortid';
import recursiveReaddir from 'recursive-readdir';

const fileComparator = (fileA, fileB) => fileA.filename > fileB.filename;
const mapPathToFileObject = filePath => ({
  id: shortid.generate(),
  path: filePath,
  filename: path.basename(filePath, path.extname(filePath)),
});

async function libraryScanner(libraryPath) {
  try {
    const paths = await recursiveReaddir(libraryPath, ['!*.md']);

    return paths
      .map(mapPathToFileObject)
      .sort(fileComparator);
  } catch (error) {
    throw error;
  }
}

export default libraryScanner;
