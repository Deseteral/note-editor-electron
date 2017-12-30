import recursiveReaddir from 'recursive-readdir';

function libraryScanner(libraryPath) {
  return recursiveReaddir(libraryPath, ['!*.md']);
}

export default libraryScanner;
