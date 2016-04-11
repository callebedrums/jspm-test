
var gulp = require('gulp');
var jspm = require('gulp-jspm');
var sourcemaps = require('gulp-sourcemaps');
var karmaServer = require('karma').Server;
var webserver = require('gulp-webserver');

gulp.task('test', function (done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('jspm-map', function () {
    gulp.src('public/app/main.js')
        .pipe(sourcemaps.init())
        .pipe(jspm())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/'))
});

gulp.task('webserver', function () {
    gulp.src('public')
        .pipe(webserver({
            livereload: true,
            open: true,
            fallback: 'index.html'
        }));
});