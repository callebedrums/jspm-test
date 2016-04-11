
var gulp = require('gulp');
var jspm = require('gulp-jspm');
var sourcemaps = require('gulp-sourcemaps');
var karmaServer = require('karma').Server;
var server = require('gulp-server-livereload');

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

gulp.task('serve', function () {
    gulp.src('public')
        .pipe(server({
            livereload: {
                enabled: true,
                filter: function (filePath, cb) {
                    cb(!(/jspm_packages/.test(filePath)));
                }
            },
            open: true,
            defaultFile: 'index.html',
            fallback: 'index.html'
        }));
});