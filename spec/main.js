(function(){
	var js_path = '../app/js';
	var lib_path = js_path + '/libs';
	var src_path = js_path + '/src';
	require(
	{
		paths: {
			spec: '.',
			src: src_path,
			order: js_path + '/order',
			backbone: lib_path + '/backbone/backbone',
			underscore: lib_path + '/underscore/underscore'
		}
	},
	[
		"order!jasmine/jasmine", 
		"order!jasmine/jasmine-html",
		"order!spec/Player.spec"
	],
	function(){
		require.ready(function(){
			jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
			jasmine.getEnv().execute();
		});
	}
);
})();
