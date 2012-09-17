var Rx = require('rxjs')
  , events = require('events')
  , emitter = new events.EventEmitter()
  , tick
  , max = 70 
  , min = 30 
  , value = (max-min)/2+min 
  , intervalInMs = 100;

// Copied from rxjs-node, that is not in the NPM so I did not bother installing it
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
    emitter.emit('tick', value); 
    value = value + 2*(Math.random()-0.5);
    value = Math.min(value, max);
    value = Math.max(value, min);
    }, intervalInMs);

module.exports = emitter.toObservable('tick');
