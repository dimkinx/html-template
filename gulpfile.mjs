/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import config from './gulp/config.mjs';
import clearBuild from './gulp/tasks/clear-build.mjs';
import {initServer, streamServer, reloadServer} from './gulp/tasks/server.mjs';
import compileHtml from './gulp/tasks/compile-html.mjs';
import compileStyles from './gulp/tasks/compile-styles.mjs';
import compileJs from './gulp/tasks/compile-js.mjs';

config.setEnv();

const streamStyles = () => streamServer(compileStyles);

const watchFiles = () => {
  gulp.watch(config.path.watch.html, gulp.series(compileHtml, reloadServer));
  gulp.watch(config.path.watch.scss, streamStyles);
  gulp.watch(config.path.watch.js, gulp.series(compileJs, reloadServer));
};

const syncServer = gulp.parallel(initServer, watchFiles);
const tasks = gulp.parallel(compileHtml, compileStyles, compileJs);

const start = gulp.series(clearBuild, tasks, syncServer);
const build = gulp.series(clearBuild, tasks);

export {start, build};
