var fs=require('fs'),
    baseURL='/var/log/syslog';
fs.stat(baseURL,function(err,stats)
{
	if(err){
	console.log(err.message);
	return;
}
console.log(stats);
});

fs.open(baseURL,'r',function(err,fd)
{
	if(err)
	{
		console.log(err.message);
		throw err;
	}
	var readBuffer= new Buffer(1024),
	    bufferOffset=0,
	    bufferLength=readBuffer.length,
	    filePosition=100;

	fs.read(fd,readBuffer,bufferOffset,bufferLength,filePosition,function(err,readBytes)
	{
		if(err)
		{
			console.log(err.message);
			throw err;
		}
		console.log('just read '+readBytes +' bytes');
		if(readBytes>0)
		{
			console.log(readBuffer.slice(0,readBytes).toString());
		}
	});
	fs.close(fd,function()
	{
		console.log('File closed for read mode');
	});

});
fs.open(baseURL,'a',function(err,fd){
	if(err)
	{
		console.log(err);
		throw err;
	}
	var writeBuffer = new Buffer('Content to append'),
	bufferOffset=0,
	bufferLength=writeBuffer.length,
	filePosition=null;

	fs.write(fd,writeBuffer,bufferOffset,bufferLength,filePosition,function(err,writeBytes)
	{
		if(err)
		{
			console.log(err);
			throw err;
		}
		console.log('Written Bytes '+writeBytes);
	});

	fs.close(fd,function()
	{
		console.log('File closed for append mode');
	})
});
