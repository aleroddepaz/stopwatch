define([ 'backbone', 'jquery', 'underscore' ], function(Backbone, $, _) {
	var StopwatchView = Backbone.View.extend({
		el : $('body'),
		events : {
			'click button#start' : 'startStopwatch',
			'click button#pause' : 'pauseStopwatch',
			'click button#clear' : 'clearStopwatch'
		},
		initialize : function(stopwatch){
			_.bindAll(this, 'render', 'startStopwatch', 'pauseStopwatch', 'clearStopwatch');
			this.stopwatch = stopwatch;
			this.render();
		},
		render : function(){
			$(this.el).append('<div id="timer">0.00</div>');
			//this.stopwatch.setContainer($('#timer'));
			this.stopwatch.set({ timerContainer : $('#timer') });
			$(this.el).append('<button id="start">Start</button>');
			$(this.el).append('<button id="pause">Pause</button>');
			$(this.el).append('<button id="clear">Clear</button>');
		},
		startStopwatch : function(){
			this.stopwatch.start();
		},
		pauseStopwatch : function(){
			this.stopwatch.pause();
		},
		clearStopwatch : function(){
			this.stopwatch.clear();
			$('#timer').html('0.00');
		}
	});
	
	return StopwatchView;
});
