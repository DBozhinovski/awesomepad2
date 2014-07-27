var gulp = require('gulp');

gulp.task('static', function() {
	return gulp.src('src/assets/**')
		.pipe(gulp.dest('public'));
});
