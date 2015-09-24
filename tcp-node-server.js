var net = require('net');

net.createServer(function(socket){
	socket.write('hello/n');
	socket.write('world/n');

	socket.on('data', function(data){
		socket.write(data);
	})
})

server.listen(8124);