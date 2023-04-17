/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import gcmq from 'gulp-group-css-media-queries';
import rename from 'gulp-rename';
import config from '../config.mjs';

const sass = gulpSass(dartSass);

const compileStyles = () => gulp
  .src(config.path.source.scss, {sourcemaps: true})
  .pipe(sass().on('error', sass.logError))
  .pipe(
    postcss([
      autoprefixer({
        grid: true,
      })]),
  )
  .pipe(gulp.dest(config.path.build.css))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest(config.path.build.css), {sourcemaps: '.'});

const compileMinStyles = () => gulp
  .src(config.path.source.scss)
  .pipe(sass().on('error', sass.logError))
  .pipe(
    postcss([
      autoprefixer({
        grid: true,
      })]),
  )
  .pipe(gcmq())
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest(config.path.build.css));

export {compileStyles, compileMinStyles};
