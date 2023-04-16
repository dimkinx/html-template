import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './build';
const sourceFolder = './source';

const config = {
  path: {
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
      html: `${sourceFolder}/html/**/*.html`,
    },
    clean: buildFolder,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
