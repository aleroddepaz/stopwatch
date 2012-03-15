define(['backbone'], function(Backbone) {

	var Stopwatch = Backbone.Model.extend({
		start : function() {
			var start = new Date().getTime(), time = 0, elapsed = '0.0';
			function instance() {
				time += 100;
				elapsed = Math.floor(time / 100) / 10;
				if(Math.round(elapsed) == elapsed) {
					elapsed += '.0';
				}
				document.title = elapsed;
				var diff = (new Date().getTime() - start) - time;
				window.setTimeout(instance, (100 - diff));
			}
			window.setTimeout(instance, 100);
		},
		stop : function() {
			window.setTimeout = null;
		},
		clear : function() {
		}
	});

	return Stopwatch;
});
