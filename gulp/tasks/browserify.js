var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundle-logger');
var gulp         = require('gulp');
var handleErrors = require('../util/handle-errors');
var source       = require('vinyl-source-stream');
var streamify 	 = require('gulp-streamify');
var uglify			 = require('gulp-uglify');

gulp.task('browserify', function() {

	var bundleMethod = global.isWatching ? watchify : browserify;

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
			// Streamify + uglify, since gulp-uglify doesn't like streaming
			.pipe(streamify(uglify()))
			// Specify the output destination
			.pipe(gulp.dest('./public/js/'))
			// Log when bundling completes!
			.on('end', bundleLogger.end);
	};

	if(global.isWatching) {
		// Rebundle with watchify on changes.
		bundler.on('update', bundle);
	}

	return bundle();
});
