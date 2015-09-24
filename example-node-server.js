var http = require('http');

var s = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello ');
  setTimeout(function(){
  	response.end('World\n');
  }, 2000);
});

s.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
