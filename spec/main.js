(function(){
	var js_path = '../app/js';
	var libs_path = js_path + '/libs';
	require(
	{
		paths: {
			spec: '.',
			src: js_path,
			order: libs_path + '/order',
			backbone: libs_path + '/backbone',
			underscore: libs_path + '/underscore'
		}
	},
	[
		"order!jasmine-1.1.0/jasmine",
		"order!jasmine-1.1.0/jasmine-html",
		"order!spec/Stopwatch.spec"
	],
	function(){
		require.ready(function(){
			jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
			jasmine.getEnv().execute();
		});
	}
);
})();
