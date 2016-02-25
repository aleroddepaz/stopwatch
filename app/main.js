require.config({
  paths : {
    jquery: 'vendor/jquery/dist/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone'
  }
});

require([ 'js/Stopwatch', 'js/StopwatchView' ], function(Stopwatch, StopwatchView) {
  var stopwatch = new Stopwatch;
  var stopwatchView = new StopwatchView(stopwatch);
});