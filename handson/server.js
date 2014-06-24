var 	http=require('http'),
	util=require('util');

newBuffer = new Buffer('Hello World');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
console.log(req.url);
res.write(newBuffer);
res.end(util.inspect(req.headers));

}).listen(4000);
