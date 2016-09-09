const gulp = require('gulp');
const browserify = require('browserify');
const watchify = require('watchify');
const reactify = require('reactify');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const nodemon = require('nodemon');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const fs = require('fs');
const gulpreact = require('gulp-react');

gulp.task('build', () => {
  return browserify('index.js')
  .transform(babelify, { presets: ['es2015', 'react'] })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
  gulp.watch('index.js', ['build']);
});

gulp.task('default', ['watch', 'build', 'serve']);

// const bucket = browserify({
//   //TO FIX
//   entries: ['./index.js'],
//   cache: {},
//   packageCache: {},
//   plugin: [watchify]
// });

// bucket.on('update', bundle);

// bundle();

// function bundle(){
//   bucket.transform('babelify', {
//     presets: ['es2015', 'react']
//   }).bundle()
//   .pipe(source('bundle.js'))
//   .pipe(buffer())
//   .pipe(sourcemaps.init())
//   .pipe(uglify())
//   .pipe(sourcemaps.write('maps'))
//   .pipe(gulp.dest(__dirname + './build'));
// }


gulp.task('serve', serve);

function serve(){
  nodemon({
    script: './server.js'
  })
}

// gulp.task('default', ['serve']);