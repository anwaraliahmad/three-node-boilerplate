var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var nodemon = require('nodemon');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('compile-js', function() {
  return browserify('app/js/main.js')
    .transform(babelify)
    .bundle()
    .pipe(source('scripts.min.js'))
    .pipe(buffer())
    .pipe(gulpif(process.env.NODE_ENV === 'production', uglify()))
    .pipe(gulp.dest('dist'))
  }
);

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('server', ['compile-js'], function() {
  browserSync.create().init({
    files: ['dist/**'],
    port: 3001,
    proxy: 'http://localhost:3000',
    ui: { port: 3002 },
    open: false,
  });

  gulp.watch(['app/**/*.js'], ['compile-js']);
  gulp.watch(['app/**/*.scss'], ['compile-js']);

  return nodemon({
    script: 'server/index.js',
    env: { 'NODE_ENV': 'development' },
    watch: ['server/**/*'],
  });
});
