define([ 'backbone' ], function(Backbone) {
	var Stopwatch = Backbone.Model.extend({
		defaults : {
			timer : 0,
			elapsed : 0,
			interval : null,
			timerContainer : null,
			running : false
		},
		isRunning : function(){
			return this.get('running');
		},
		start : function (){
			if(!this.isRunning()){
				this.set({
					running : true,
					interval : this.run(this)
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
		},
		run : function(context){
			var interval = setInterval(function (){
				var timer_local = context.get('timer') + 10;
				var elapsed_local = timer_local / 1000;
				if(Math.round(elapsed_local) == elapsed_local) { elapsed_local += '.00'; }
				context.set({ timer : timer_local, elapsed : elapsed_local });
				context.get('timerContainer').html(elapsed_local);
			}, 10);
			return interval;
		}
	});

	return Stopwatch;
});
