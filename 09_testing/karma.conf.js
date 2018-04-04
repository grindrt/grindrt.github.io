var webpackConfig = require('./webpack.test.config');

// Karma configuration
// Generated on Mon Apr 02 2018 22:43:04 GMT+0300 (Belarus Standard Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'
      , 'browserify'
      // , 'requirejs'
    ],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './tests/test-context.js',
      // // './tests/test.js'
      // './tests/*.spec.js'
      // // './tests/**/*.spec.js'
      './src/services/articleStore.js',
      './src/routings/routing.js',
      './src/components/ArticleForm/index.js',
      './src/components/ArticleList/index.js',
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'test-context.js': ['browserify']
            'tests/**/test-context.js': ['webpack']
      // ,
      // 'tests/**/*.spec.js': ['browserify']
      // 'tests/**/*.spec.js': ['coverage']
    },

    webpack: {
      module: {
        rules: [
          {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
          },
          {
              test: /\.html$/,
              use: 'html-loader'
          }
        ]
      }
    },

    webpackServer: { noInfo: true },

    // webpackMiddleware: {
    //   noInfo: true
    // },

    // coverageReporter: {
    //   type: 'html',
    //   dir: './coverage'
    // },

    browserify: {
      debug: true,
      transform: ['brfs'],
      configure: function (bundle) {
        bundle.on('prebundle', function () {
          bundle.external('foobar');
        });
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'
      // , 'coverage'
    ],


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
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
