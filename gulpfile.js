var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('test', function (done) {
  new Server({
    frameworks: ['jasmine', 'requirejs'],
    files: [
      'spec/test-main.js',
      {pattern: 'app/**/*.js', included: false},
      {pattern: 'spec/**/*.spec.js', included: false}
    ],
    exclude: ['app/main.js'],
    browsers: ['PhantomJS'],
    singleRun: true
  }, done).start();
});