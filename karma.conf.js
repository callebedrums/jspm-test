// Karma configuration
// Generated on Sat Apr 09 2016 11:32:21 GMT-0300 (E. South America Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['es5-shim', 'jspm', 'mocha', 'chai', 'sinon'],

    jspm: {
        config: 'public/config.js',
        loadFiles: ['test/**/*.spec.js'],
        serveFiles: ['public/**/*.js']
    },

    proxies: {
        '/test/': '/base/test/',
        '/public/': '/base/public/',
        '/jspm_packages/': '/base/public/jspm_packages/'
    },

    // list of files / patterns to load in the browser
    files: [],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'public/app/**/*.js': ['babel', 'coverage']
    },

    babelPreprocessor: {
        options: {
            presets: ['es2015'],
            sourceMap: 'inline'
        }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
        instrumenters: { isparta : require('isparta') },
        instrumenter: {
            'public/app/**/*.js': 'isparta'
        },
        dir: 'reports/coverage/',
        reporters: [
            { type: 'html', subdir: 'html' },
            /*{ type: 'lcov', subdir: 'lcov' },
            { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
            { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
            { type: 'text', subdir: '.', file: 'text.txt' },
            { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },*/
            { type: 'cobertura', subdir: '.', file: 'cobertura.xml' },
            { type: 'json', subdir: '.', file: 'coverage.json' }
        ],
        includeAllSources: true
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
