var http = require('http')
setInterval(function(){
	console.log("Fetching Google.com");
	http.get({host: 'google.com'}, function(res){
		console.log(res.headers);
	});
}, 2000);

console.log('Hello');

var s = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  setTimeout(function(){
  	response.end('World\n');
  }, 2000);
});

s.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
