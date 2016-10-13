var stream = require('stream');


function NumberWrite(options){
    stream.Writable.call(this, options);
    
}

NumberWrite.prototype = Object.create(stream.Writable.prototype);
NumberWrite.prototype.constructor = NumberWrite;

NumberWrite.prototype._write = function(chunk, encoding, callback) {
    console.log(chunk.toString('utf-8'));
    callback();
}


module.exports = NumberWrite;