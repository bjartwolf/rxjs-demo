This is a demonstration of creating streams that are observable with
filters, to demonstrate functional composition.

The idea in this example is that one can create a 
PWM modulation of a signal by comparing a signal to
a sawtooth-signal. The PWM signal will have the same
frequency as the sawtooth. I think this gives some pretty
nice abstractions, especially when the signal generators (sawtooth and the
analog signal) are observable streams.

--------------
| Sawtooth   |
|            |-------
--------------      |
                    |
                   ------
                   |    | 
                   | >  |------- PWM 
                   |    | 
                   ------
                    |
--------------      |
| Analog     |------
| Signal     |
--------------
