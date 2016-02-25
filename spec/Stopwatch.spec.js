define([ 'jquery', 'js/Stopwatch' ], function($, Stopwatch) {

  function sleep(ms) {
    var init = new Date().getTime();
    while ((new Date().getTime() - init) < ms){}
  }

  describe("Stopwatch", function() {
    var stopwatch;

    beforeEach(function() {
      stopwatch = new Stopwatch({
        timerContainer : $('<div/>')
      });
    });

    it("should be able to start the timer", function() {
      stopwatch.start();
      expect(stopwatch.isRunning()).toBeTruthy();
    });
    describe("when it has been paused", function() {
      beforeEach(function() {
        stopwatch.start();
        sleep(500);
        stopwatch.pause();
      });
      it("should indicate that the timer isn't currently running", function() {
        expect(stopwatch.isRunning()).toBeFalsy();
      });
      it("should be possible to resume", function() {
        stopwatch.start();
        expect(stopwatch.isRunning()).toBeTruthy();
      });
    });
    describe("when it has been cleared", function() {
      beforeEach(function() {
        stopwatch.clear();
      });
      it("should indicate that the timer isn't currently running", function() {
        expect(stopwatch.isRunning()).toBeFalsy();
      });
      it("should indicate that the timer is equal to zero", function(){
        expect(stopwatch.get('timer')).toEqual(0);
      });
    });

    afterEach(function() {
      stopwatch.clear();
      stopwatch = null;
    });
  });
});
