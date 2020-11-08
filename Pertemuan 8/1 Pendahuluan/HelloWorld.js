
//Hello World 
// console.log('Hello World');


//Hello World Server
var http = require("http");

http.createServer(function(request, response) {
    //Send the HTTP header
    //HTTP Status: 200 : OK
    //Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //Send the response body as "Hello World"
    response.end('Hello World Server\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');