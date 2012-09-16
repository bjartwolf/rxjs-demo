var Rx = require('rxjs')
  , events = require('events')
  , emitter = new events.EventEmitter()
  , tick
  , intervalInMs = 100;

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
    emitter.emit('tick', now.getSeconds()); 
    //emitter.emit('tick', Math.random()); 
    }, intervalInMs);

module.exports = emitter;
