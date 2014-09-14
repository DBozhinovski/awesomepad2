'use strict';

var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {

	var bundler = watchify(browserify({
		entries: './src/app.js',
		extensions: ['.js', '.ractive'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	bundler.on('update', rebundle);

	function rebundle(){
		bundleLogger.start();

		return bundler.bundle()
			.on('error', handleErrors)
			.pipe(source('app.js'))
			.pipe(gulp.dest('./public/javascripts/'))
			.on('end', bundleLogger.end);
	}

	return rebundle();
});
