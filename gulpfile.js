var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
	  
	 gulp.src('src/styles/*.*')
      .pipe(gulp.dest('dist/styles'));
});



gulp.task('default',['browserify', 'copy', 'copyCSS']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});