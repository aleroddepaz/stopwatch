module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'requirejs'],

    files: [
      'spec/test-main.js',
      {pattern: 'app/**/*.js', included: false},
      {pattern: 'spec/**/*.spec.js', included: false}
    ],

    exclude: [
      'app/main.js'
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    singleRun: true
  });
}
