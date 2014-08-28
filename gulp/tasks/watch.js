/* jshint node: true */
'use strict';

var gulp = require('gulp');

gulp.task('watch', ['setWatch'], function(){
  gulp.watch('src/styles/**', ['stylus']);
  gulp.watch('src/assets/**', ['static']);
});
