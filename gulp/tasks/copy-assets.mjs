// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp';
import config from '../config.mjs';

const copyAssets = () => gulp
  .src([
    config.path.source.woff,
    config.path.source.img,
    config.path.source.svg,
    config.path.source.favicon,
  ], {
    base: 'source',
  })
  .pipe(gulp.dest('build'));

export default copyAssets;
