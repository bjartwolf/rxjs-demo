var Rx = require('rxjs')
  , sawtooth = require('./src/sawtooth.js')  
  , rnd = require('./src/random.js');

// Zip does not use any scheduler, it's possible to use functions
// that takes a scheduler to orchestrate this

rnd.take(100).average().subscribe(function (res) { console.log('AVG : ' + res);});
rnd.take(100).max().subscribe(function (res) { console.log('MAX: ' + res);});
rnd.take(100).min().subscribe(function (res) { console.log('MIN: ' + res);});

sawtooth.zip(rnd, function (saw,random) { 
                return saw > random; 
            })
            .subscribe(function (x) {
                console.log(x);
            });
