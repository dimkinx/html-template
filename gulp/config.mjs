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
      img: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
    },
    source: {
      html: `${sourceFolder}/html/*.html`,
      scss: `${sourceFolder}/scss/style.scss`,
      js: [
        `${sourceFolder}/js/main.js`,
        `${sourceFolder}/js/vendor.js`,
      ],
      favicon: `${sourceFolder}/favicon/**`,
      img: `${sourceFolder}/img/**/*.{jpg,jpeg,png,webp}`,
      jpg: `${sourceFolder}/img/**/*.{jpg,jpeg}`,
      png: `${sourceFolder}/img/**/*.png`,
      svg: `${sourceFolder}/img/svg/*.svg`,
      icons: `${sourceFolder}/img/sprite/icons/*.svg`,
      sprite: `${sourceFolder}/img/sprite/`,
      fonts: `${sourceFolder}/fonts/`,
      ttf: `${sourceFolder}/fonts/*.ttf`,
      woff: `${sourceFolder}/fonts/*.{woff,woff2}`,
    },
    watch: {
      html: `${sourceFolder}/html/**/*.html`,
      scss: `${sourceFolder}/scss/**/*.scss`,
      js: `${sourceFolder}/js/**/*.js`,
      icons: `${sourceFolder}/img/sprite/icons/*.svg`,
    },
  },
  setEnv() {
    this.isProd = process.argv.includes('--production');
    this.isDev = !this.isProd;
  },
};

export default config;
