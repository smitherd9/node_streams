var stream = require('stream');


function Number(options){
    stream.Readable.call(this, options);
    this._curr = 0;
    this._end = 25;
}
Number.prototype = Object.create(stream.Readable.prototype);
Number.prototype.constructor = Number;


Number.prototype._read = function() {
    var randomNum = Math.floor((Math.random() * 100) + 1);
    var buf = new Buffer(randomNum.toString() + ' ', 'utf8');
    this.push(buf);
    this._curr++;
    if (this._curr === this._end) {
        this.push(null);      // need this to signal end of stream
    }
};





module.exports = Number;