var Alphabet = require('./alphabet');
var Number = require('./numbers');
var Cache = require('./cache');
var alpha = new Alphabet();
var cache = new Cache('alpha1');
var number = new Number();
var NumberWrite = require('./numbers_write');
var numbersWrite = new NumberWrite();
var NumberTran = require('./number_transform');
var numberTrans = new NumberTran();

alpha.pipe(cache);
number.pipe(numberTrans);


cache.on('finish', function() {
    console.log('Cache store:');
    for (var key in Cache.store) {
        console.log(key, ':', Cache.store[key].toString('utf-8'));
    }
    
});