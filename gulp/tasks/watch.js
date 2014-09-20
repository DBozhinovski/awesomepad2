'use strict';

var gulp = require('gulp');

// Watch and rerun stylus
gulp.task('watch', ['browserify'], function(){
  gulp.watch('./src/styles/**', ['stylus']);
  gulp.watch('./src/assets/**', ['static']);
});
