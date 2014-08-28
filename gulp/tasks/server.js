'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var http = require('http');
var ecstatic = require('ecstatic');

gulp.task('server', function(){
  http.createServer(
    ecstatic({root: './public'})
  ).listen(8090);

  gutil.log('Listening on', gutil.colors.green(':8090'));
});
