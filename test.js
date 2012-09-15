var Rx = require('rxjs')
  , clock = require('./src/clock.js')  
  , observable = clock.toObservable('tick');

observable.subscribe(
    function (sec) {
        console.log(sec);
    });
