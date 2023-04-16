/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import config from './gulp/config.mjs';
import clean from './gulp/tasks/clean.mjs';
import compileHtml from './gulp/tasks/compile-html.mjs';
import {initServer, reloadServer} from './gulp/tasks/server.mjs';

const watch = () => {
  gulp.watch(config.path.watch.html, gulp.series(compileHtml, reloadServer));
};

const dev = gulp.series(clean, compileHtml, gulp.parallel(initServer, watch));

gulp.task('default', dev);
