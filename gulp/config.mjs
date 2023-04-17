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
      css: `${buildFolder}/css/`,
    },
    source: {
      html: `${sourceFolder}/html/*.html`,
      scss: `${sourceFolder}/scss/style.scss`,
    },
    watch: {
      html: `${sourceFolder}/html/**/*.html`,
      scss: `${sourceFolder}/scss/**/*.scss`,
    },
    clean: buildFolder,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
