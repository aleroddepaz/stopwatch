define([
	'backbone'
], function(Backbone){
	
	var Stopwatch = Backbone.Model.extend({
		start : function(){
			this.isRunning = true;
		},
		stop : function(){
			this.isRunning = false;
		},
		clear : function(){
			this.timer = 0;
		},
		timer : 0,
		isRunning : false
	});
	
	return Stopwatch;
});
