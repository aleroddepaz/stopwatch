define([
	'src/Stopwatch'
], function(Stopwatch) {
	describe("Stopwatch", function() {
		var stopwatch;

		beforeEach(function() {
			stopwatch = new Stopwatch;
		});
		
		it("should be able to start the timer", function() {
			stopwatch.start();
			expect(stopwatch.isRunning).toBeTruthy();
		});
		describe("when it has been stopped", function() {
			beforeEach(function() {
				stopwatch.start();
				waits(500);
				stopwatch.stop();
			});
			it("should indicate that the timer isn't currently running", function() {
				expect(stopwatch.isRunning).toBeFalsy();
			});
			it("should be possible to resume", function() {
				stopwatch.start();
				expect(stopwatch.isRunning).toBeTruthy();
				expect(stopwatch.timer).toBeGreaterThan(500);
			});
		});
		describe("when it has been cleared", function() {
			beforeEach(function() {
				stopwatch.clear();
			});
			it("should indicate that the timer is equal to zero", function(){
				expect(stopwatch.timer).toEqual(0);
			});
		});
	});
});
