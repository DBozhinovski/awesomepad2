'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var nib = require('nib');

// Compile and concat everything from app/styles to public/stylesheets/app.css
gulp.task('stylus', function(){
  return gulp.src('./src/styles/**/*.styl')
    .pipe(concat('styles'))
    .pipe(stylus({
      use: [ nib() ],
      compress: true
    }))
    .pipe(gulp.dest('./public/css/'));
});
