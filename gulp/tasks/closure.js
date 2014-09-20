'use strict';

var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');

gulp.task('closure', function(){
  gulp.src('./public/javascripts/app.js')
    .pipe(closureCompiler({
      compilerPath: 'bower_components/compiler-latest/compiler.jar',
      fileName: 'app.min.js',
      compilerFlags: {
        language_in: 'ECMASCRIPT5', // not all external libs use "strict"
        warning_level: 'QUIET' // It outputs nothing if set to DEFAULT / VERBOSE
      },
    }))
    .pipe(gulp.dest('./public/javascripts'));
});
