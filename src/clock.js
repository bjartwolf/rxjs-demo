var event = require('events')
  , clock = new event.EventEmitter()
  , tick,
  intervalInMs = 100;

// Start ticking the clock as soon as the
// module is loaded 
setInterval(function () {
    var now = new Date();
    clock.emit('tick', now.getSeconds());
    }, intervalInMs);

module.exports = clock;
