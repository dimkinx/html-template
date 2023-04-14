import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './build';
const sourceFolder = './source';

const path = {
  rootFolder,
  buildFolder,
  sourceFolder,
  build: {
    html: `${buildFolder}/`,
  },
  source: {
    html: `${sourceFolder}/html/*.html`,
  },
  watch: {
    html: `${sourceFolder}/html/*.html`,
  },
  clean: buildFolder,
};

export default path;
