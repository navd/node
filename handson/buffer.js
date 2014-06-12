var buffer = new Buffer(100);
var util = require('util');

for(i=0;i<=buffer.length;i++){
buffer[i]=i;
}
//var slice=buffer.slice(40,60);
//for (i=0;i<=slice.length;i++){
//console.log(slice[i]);
//}
//console.log('done');

var slice=new Buffer(20);
buffer.copy(slice,0,40,60);
for(i=0;i<=slice.length;i++){
console.log(slice[i]);
}
//console.log(util.inspect(buffer,false,1,true).toString());

//var slice = new Buffer(10);
//var targetStart = 0,
//sourceStart = 10,
//sourceEnd = 20;
//buffer.copy(slice, targetStart, sourceStart, sourceEnd);
//console.log(slice.toString());
