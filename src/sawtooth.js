var Rx = require('rxjs')
  , events = require('events')
  , emitter = new events.EventEmitter()
  , tick
  , intervalInMs = 100
  , sawToothMax = 100
  , sawToothMin = 0
  , period = 50
  , value = sawToothMin;

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
    value = value + ((sawToothMax - sawToothMin)/period);
    if (value > sawToothMax) {
        value = sawToothMin;
    }
    }, intervalInMs);

module.exports = emitter.toObservable('tick');
