var events=require('events').EventEmitter,
    util=require('util');

var Ticker=function(time){
console.log('creating object');
this.time=time;
}
util.inherits(Ticker,events,function(err){
if(err)
console.log('error found '+err);
else
console.log('Class inherited');
});

Ticker.prototype.tickMethod=function(){
console.log('adding tick emitter');
this.emit('tick');
}

var instance= new Ticker(2);
instance.tickMethod();
instance.on('tick',function(){
console.log('custom event called with argument ');
});

var period = 1; // 1 second
var interval = setInterval(function() {
console.log('tick');
}, period);
process.nextTick(function(){
console.log('nextTick');
});
setTimeout(clearInterval(interval),1000);
