
var gulp = require('gulp');
var gls = require('gulp-live-server');
var jspm = require('gulp-jspm');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('jspm-map', function () {
    gulp.src('public/main.js')
        .pipe(sourcemaps.init())
        .pipe(jspm())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/'))
});

gulp.task('serve', function () {
    var server = gls.static('public', 3000);
    server.start();

    gulp.watch(['public/**/*.js', 'public/**/*.html'], function (file) {
        server.notify.apply(server, [file]);
    });
});