'use strict';

var gulp = require('gulp');

// Watch and rerun stylus
gulp.task('watch', ['setWatch', 'browserify'], function(){
  gulp.watch('./src/styles/**', ['stylus']);
  gulp.watch('./src/assets/**', ['static']);
});
