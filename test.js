var Rx = require('rxjs')
  , clock = require('./src/clock.js')  
  , rnd = require('./src/random.js')  
  , oClock = clock.toObservable('tick')
  , oRnd = rnd.toObservable('tick');

var zip = oClock.zip(oRnd, function (l,r) { 
                               return l > r; 
                               //return {left:l, right: r}; 
                           })
                .subscribe(function (x) {
                    console.log(x);
                });
