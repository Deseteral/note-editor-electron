import path from 'path';
import shortid from 'shortid';
import recursiveReaddir from 'recursive-readdir';

const FILE_COMPARATOR = (fileA, fileB) => fileA.filename > fileB.filename;
const PATH_TO_FILE_MAPPER = filePath => ({
  id: shortid.generate(),
  path: filePath,
  filename: path.basename(filePath, path.extname(filePath)),
});

async function libraryScanner(libraryPath) {
  try {
    const paths = await recursiveReaddir(libraryPath, ['!*.md']);

    return paths
      .map(PATH_TO_FILE_MAPPER)
      .sort(FILE_COMPARATOR);
  } catch (error) {
    throw error;
  }
}

export default libraryScanner;
