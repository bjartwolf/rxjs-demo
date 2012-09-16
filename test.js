var Rx = require('rxjs')
  , sawtooth = require('./src/sawtooth.js')  
  , rnd = require('./src/random.js')  
  , oSawtooth = sawtooth .toObservable('tick')
  , oRnd = rnd.toObservable('tick');

// Zip does not use any scheduler, it's possible to use functions
// that takes a scheduler to orchestrate this

var zip = oSawtooth.zip(oRnd, function (saw,random) { 
                        console.log('saw: ' + saw + ' random: ' + random);
                        return saw > random; 
                    })
                    .subscribe(function (x) {
                        console.log(x);
                    });
