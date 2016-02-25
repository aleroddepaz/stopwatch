define([ 'backbone', 'underscore', 'text!views/Stopwatch.tpl' ], function(Backbone, _, stopwatchTpl) {
  'use strict';

  var StopwatchView = Backbone.View.extend({
    template : _.template(stopwatchTpl),
    el : 'body',
    events : {
      'click button#start' : 'startStopwatch',
      'click button#pause' : 'pauseStopwatch',
      'click button#clear' : 'clearStopwatch'
    },
    initialize : function(stopwatch) {
      _.bindAll(this, 'render', 'startStopwatch', 'pauseStopwatch', 'clearStopwatch');
      this.stopwatch = stopwatch;
      this.render();
    },
    render : function() {
      this.$el.html(this.template());
      this.stopwatch.set({ timerContainer : this.$el.find('#timer') });
    },
    startStopwatch : function() {
      this.stopwatch.start();
    },
    pauseStopwatch : function() {
      this.stopwatch.pause();
    },
    clearStopwatch : function() {
      this.stopwatch.clear();
    }
  });
  
  return StopwatchView;
});
