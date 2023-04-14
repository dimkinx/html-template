// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp';
// import {copy} from './gulp/tasks/copy.mjs';
import compileHtml from './gulp/tasks/compile-html.mjs';

gulp.task('default', compileHtml);
