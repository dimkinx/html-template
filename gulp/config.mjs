import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = nodePath.resolve(nodePath.dirname(''), './build');
const sourceFolder = nodePath.resolve(nodePath.dirname(''), './source');

const config = {
  path: {
    rootFolder,
    buildFolder,
    sourceFolder,
    build: {
      html: `${buildFolder}/`,
      css: `${buildFolder}/css/`,
      js: `${buildFolder}/js/`,
    },
    source: {
      html: `${sourceFolder}/html/*.html`,
      scss: `${sourceFolder}/scss/style.scss`,
      js: [
        `${sourceFolder}/js/main.js`,
        `${sourceFolder}/js/vendor.js`,
      ],
    },
    watch: {
      html: `${sourceFolder}/html/**/*.html`,
      scss: `${sourceFolder}/scss/**/*.scss`,
      js: `${sourceFolder}/js/**/*.js`,
    },
  },
  setEnv() {
    this.isProd = process.argv.includes('--production');
    this.isDev = !this.isProd;
  },
};

export default config;
