var Rx = require('rxjs')
  , clock = require('./src/clock.js')  
  , rnd = require('./src/random.js')  
  , oClock = clock.toObservable('tick')
  , oRnd = rnd.toObservable('tick');

oRnd.take(5).subscribe(
    function (rnd) {
        console.log(rnd);
    });

oClock.subscribe(
    function (sec) {
        console.log(sec);
    });
