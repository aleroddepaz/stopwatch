(function(){
	var js_path = 'js';
	var libs_path = js_path + '/libs';
	require(
	{
		paths: {
			src: js_path,
			order: libs_path + '/order',
			backbone: libs_path + '/backbone',
			underscore: libs_path + '/underscore'
		}
	},
	[
		"src/Stopwatch"
	],
	function(Stopwatch){
		window.stopwatch = new Stopwatch;
	}
);
})();
