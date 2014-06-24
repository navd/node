var fs=require('fs'),
    URL='./a.txt';

console.log('Exercise 1');
fs.stat(URL,function(err,fd)
{
	console.log(fd.size);
});
console.log('Exercise 2');
fs.open(URL,'r',function(err,fd)
{
	if(err)
	{
		throw err;
	}
	var readBuffer = new Buffer(5);
	fs.read(fd,readBuffer,0,5,10,function(err,byteRead)
	{
		if(err)
		{
			throw err;
		}
		console.log('Byte Read '+byteRead);
		console.log(readBuffer.toString());
	});
	
process.nextTick(function(){

fs.close(fd,console.log('File discriptor closed for ex-2'))

});
	
});

console.log('Exercise 3');

fs.open(URL,'r',function(err,fd)
{
	if(err)
	{
		throw err;	
	}
	var readBuffer = new Buffer(5);
	fs.read(fd,readBuffer,0,5,5,function(err,readByte){
		console.log('Byte Read ' +readByte);
		console.log(readBuffer.toString(),
		fs.read(fd,readBuffer,0,5,10,function(err,readByte){
		
		console.log('Byte Read '+readByte);
		console.log(readBuffer.toString());
		
		}));
	});
	return fd;

});

var closeFD=function(fd,(function(){console.log('FD closed')})
{
		console.log('called fd to close');
});

console.log('Exercise 5');

fs.open(URL,'a',function(err,fd)
{
	if(err)
	{
		throw err;
	}
	var writeBuffer=new Buffer('ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz'),
   	    filePosition=fs.stat(URL,function(err,stats){
		
		if(err){
			throw err;
		}
		});
	    bufferOffset=0;
	    bufferLength=writeBuffer.length;
	    
	   fs.write(fd,writeBuffer,bufferOffset,bufferLength,filePosition,function(err,byteWritten)
	{
		if(err)
		{
			throw err;
		}
		console.log('Byte Written ' + byteWritten);
	});
	

});


