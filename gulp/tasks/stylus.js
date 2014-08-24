var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var nib = require('nib');


gulp.task('stylus', function(){
  gulp.src('./src/styles/**/*.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/css'));
});
