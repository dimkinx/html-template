/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import config from './gulp/config.mjs';
import clearBuild from './gulp/tasks/clear-build.mjs';
import {initServer, streamServer, reloadServer} from './gulp/tasks/server.mjs';
import copyAssets from './gulp/tasks/copy-assets.mjs';
import createSprite from './gulp/tasks/create-sprite.mjs';
import compileHtml from './gulp/tasks/compile-html.mjs';
import compileStyles from './gulp/tasks/compile-styles.mjs';
import compileJs from './gulp/tasks/compile-js.mjs';
import {convertTtfToWoff, convertTtfToWoff2} from './gulp/tasks/convert-fonts.mjs';

config.setEnv();

const streamStyles = () => streamServer(compileStyles);

const watchFiles = () => {
  gulp.watch(config.path.watch.html, gulp.series(compileHtml, reloadServer));
  gulp.watch(config.path.watch.scss, streamStyles);
  gulp.watch(config.path.watch.js, gulp.series(compileJs, reloadServer));
  gulp.watch(config.path.watch.icons, gulp.series(createSprite, compileHtml, reloadServer));
};

const convertFonts = gulp.series(convertTtfToWoff, convertTtfToWoff2);

const syncServer = gulp.parallel(initServer, watchFiles);

const build = gulp.series(clearBuild, copyAssets, createSprite, gulp.parallel(compileHtml, compileStyles, compileJs));
const start = gulp.series(build, syncServer);

export {convertFonts, build, start};
