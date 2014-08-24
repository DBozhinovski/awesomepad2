var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');


gulp.task('stylus', function(){
  gulp.src('./src/styles/**/*.styl')
    .pipe(stylus())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/css'));
});
