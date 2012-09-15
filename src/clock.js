//var event = require('events')
var Rx = require('rxjs')
  , events = require('events')
  , clock = new events.EventEmitter()
  , tick,
  intervalInMs = 100;


events.EventEmitter.prototype.toObservable = function(eventName) {
	var parent = this;
	return Rx.Observable.create(function(observer) {
		var handler = function(o) {
			observer.onNext(o);
		};
		parent.addListener(eventName, handler);
		return function() {
			parent.removeListener(eventName, handler);
		};
	});
};

// Start ticking the clock as soon as the
// module is loaded 
setInterval(function () {
    var now = new Date();
    clock.emit('tick', now.getSeconds());
    }, intervalInMs);

module.exports = clock;
