var allTestFiles = [];
var TEST_REGEXP = /spec\.js$/i;

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(file);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app',

  paths : {
    jquery: 'vendor/jquery/dist/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone'
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
