var http = require('http');

console.log('Hello');

var s = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  setTimeout(function(){
  	response.end('World\n');
  }, 4000);
});

s.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
