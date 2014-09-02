var http = require("http");
var url = require("url");
debugger;
console.log('start now');
function start(route, handle) {
debugger;
function onRequest(request, response) {
var postData = "";
var pathname = url.parse(request.url).pathname;
console.log("Request for " + pathname + " received.");
    debugger;
route(handle, pathname, response, request);
}
http.createServer(onRequest).listen(8888);
    debugger;
console.log("Server has started.");
}
exports.start = start;

