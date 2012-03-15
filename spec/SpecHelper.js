define(function() {
	return {
		addMatchers : function(context) {
			context.addMatchers({
				toBePlaying : function(expectedSong) {
					var player = this.actual;
					return player.currentlyPlayingSong === expectedSong && player.isPlaying;
				}
			});
		}
	}
});
