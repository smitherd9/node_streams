var stream = require('stream');

function NumberTran(options){
    stream.Transform.call(this, options);
    
}

NumberTran.prototype = Object.create(stream.Transform.prototype);
NumberTran.prototype.constructor = NumberTran;

NumberTran.prototype._transform = function(chunk, encoding, callback) {
    for (var i = 0; i < chunk.length; i++){
    if (chunk[i] <= 99){
        chunk[i] == 0;
     }
    //  return chunk[i];
     
    }
    console.log(chunk.toString('utf-8'));
    this.push(chunk);
    callback();
};


module.exports = NumberTran;