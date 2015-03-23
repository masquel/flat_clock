'use strict';

var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    zip = require('gulp-zip');


gulp.task('stylus', function() {
    gulp.src('./assets/stylus/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('flatClock/css/'))
});

gulp.task('uglify', function(){
	gulp.src('./flatClock/flatClock.js').pipe(uglify())
	.pipe(rename({extname: '.min.js'})).pipe(gulp.dest("./flatClock/"))
});

gulp.task('zip', function(){
    return gulp.src(['./flatClock/*.*', './flatClock/css/*.*'], {base: "."}).pipe(zip('flatClock.zip')).pipe(gulp.dest("./download"))
});

gulp.task('watch', function() {
    gulp.watch('./assets/stylus/*.styl', ['stylus']);
    gulp.watch('./flatClock/*.js', ['uglify']);
    gulp.watch('./flatClock/*', ['zip']);
});

gulp.task('default', ['stylus', 'uglify', 'watch', 'zip']);