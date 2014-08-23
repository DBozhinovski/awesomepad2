var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');

gulp.task('closure', function(){
  gulp.src('./public/js/app.js')
    .pipe(closureCompiler({
      compilerPath: 'bower_components/compiler-latest/compiler.jar',
      fileName: 'app.min.js',
      compilerFlags: {
        language_in: "ECMASCRIPT5", // not all external libs use "strict"
        warning_level: "QUIET"
      },
    }))
    .pipe(gulp.dest('./public/js/'));
});
