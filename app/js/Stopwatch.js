define([ 'backbone' ], function(Backbone) {
  'use strict';

  var Stopwatch = Backbone.Model.extend({
    defaults : {
      timer : 0,
      elapsed : 0,
      interval : null,
      timerContainer : null,
      running : false
    },
    isRunning : function() {
      return this.get('running');
    },
    start : function () {
      if(!this.isRunning()) {
        this.set({
          running : true,
          interval : this.run()
        });
      }
    },
    pause : function() {
      this.set({ running : false });
      clearInterval(this.get('interval'));
    },
    clear : function() {
      if(this.isRunning()){
        this.pause();
      }
      this.set({ timer : 0 });
      this.get('timerContainer').html('0.00');
    },
    run : function() {
      var self = this;
      return setInterval(function() {
        var timer_local = self.get('timer') + 10;
        var elapsed_local = timer_local / 1000;
        if(Math.round(elapsed_local) == elapsed_local) { elapsed_local += '.00'; }
        self.set({ timer : timer_local, elapsed : elapsed_local });
        self.get('timerContainer').html(elapsed_local);
      }, 10);
    }
  });

  return Stopwatch;
});
