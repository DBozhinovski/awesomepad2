'use strict';

var browserify   = require('browserify');
// var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

gulp.task('browserify', function() {

	// var bundleMethod = global.isWatching ? watchify : browserify;
	var bundleMethod = browserify;

	var bundler = bundleMethod({
		// Specify the entry point of your app
		entries: ['./src/app.js'],
		// Add file extentions to make optional in your requires
		extensions: ['.js', '.ractive'],
		debug: true
	});

	var bundle = function() {
		// Log when bundling starts
		bundleLogger.start();

		return bundler
			// Enable source maps!
			.bundle()
			// Report compile errors
			.on('error', handleErrors)
			// Use vinyl-source-stream to make the
			// stream gulp compatible. Specifiy the
			// desired output filename here.
			.pipe(source('app.js'))
			// Specify the output destination
			.pipe(gulp.dest('./public/javascripts/'))
			// Log when bundling completes!
			.on('end', bundleLogger.end);
	};

	// smell?
	if(global.isWatching) {
		// Rebundle with watchify on changes.
		bundler.on('update', bundle);
	}

	return bundle();
});
