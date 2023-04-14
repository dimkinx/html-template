// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp';
import path from '../config/path.mjs';

const copySvg = () => gulp
  .src('source/img/**/*.svg', {base: 'source'})
  .pipe(gulp.dest('build'));

const copyImages = () => gulp
  .src('source/img/**/*.{png,jpg,webp}', {base: 'source'})
  .pipe(gulp.dest('build'));

const copy = () => gulp.src(path.source.html).pipe(gulp.dest(path.build.html));

export {copy, copyImages, copySvg};
