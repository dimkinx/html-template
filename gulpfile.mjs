/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import config from './gulp/config.mjs';
import clean from './gulp/tasks/clean.mjs';
import compileHtml from './gulp/tasks/compile-html.mjs';
import {compileStyles} from './gulp/tasks/compile-styles.mjs';
import {initServer, streamServer, reloadServer} from './gulp/tasks/server.mjs';

const streamStyles = () => streamServer(compileStyles);

const watch = () => {
  gulp.watch(config.path.watch.html, gulp.series(compileHtml, reloadServer));
  gulp.watch(config.path.watch.scss, streamStyles);
};

const dev = gulp.series(
  clean,
  gulp.parallel(
    compileHtml,
    compileStyles,
  ),
  gulp.parallel(
    initServer,
    watch,
  ),
);

gulp.task('default', dev);
