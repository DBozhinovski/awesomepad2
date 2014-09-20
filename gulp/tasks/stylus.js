'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var nib = require('nib');

// Compile and concat everything from app/styles to public/stylesheets/app.css
gulp.task('stylus', function(){
  return gulp.src('./src/styles/**/*.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/css/'));
});
