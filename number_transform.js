var stream = require('stream');

function NumberTran(options){
    stream.Transform.call(this, options);
    
}

NumberTran.prototype = Object.create(stream.Transform.prototype);
NumberTran.prototype.constructor = NumberTran;

NumberTran.prototype._transform = function(chunk, encoding, callback) {
    
    if (chunk <= 99){
        chunk = '0';
    }
     
    //  return chunk[i];
    console.log(chunk.toString('utf8'));
    this.push(chunk);
    callback();
    
};


module.exports = NumberTran;