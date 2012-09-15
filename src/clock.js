var event = require('events')
  , clock = new event.EventEmitter()
  , tick;

setInterval(function () {
    clock.emit('tick');
    }, 100);

module.exports = clock;
