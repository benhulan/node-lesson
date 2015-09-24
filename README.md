![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## What is Node.js, Really?

1. [Learning Objectives](#learning-objectives)
1. [Scaffolding](#scaffolding)
1. [Framing](#framing)
1. [Assessments](#assessments)
1. [Timings](#timings)
1. [Real world examples](#examples)
1. [Connections to long-term learning goals](#connections)

#### Learning Objectives:
Students will be able to...
- Describe the basic history of Node and explain its significance
- Code in the Node REPL
- Launch a Node server
- Callback a function from a Node module

#### Scaffolding
1. [Hello World](node-hello-world.js)
1. [First Server](example-node-server.js)
1. [First TCP Sockets](tcp-node-server.js)
1. [Chat Server](node-chat-server.js)

#### Framing
What is Node.js?


#### Assessments
What is Node?
How do you code in the Node REPL?
How do you launch a Node server?
How do you call a function from a Node module?

#### Timing
- Learning Objectives ( < 5 min )
- Overview ( < 10 min )
- Demo Exercises ( < 30 min )
- Q&A ( < 20 min )

#### Examples

This is your basic "Hello, World" Node code.
Install Node and run it in the REPL.

```
function sayHi() { 
	console.log('Oh, Hey!') 
};

setTimeout(sayHi, 5000);

console.log('Hi there');
```
Who cares? We want to do something cool.
Let's launch an instance of a Node HTTP server:

```
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
```
In terminal type the following line to log messages to the REPL:
``` curl -i http://localhost:8124/ ```

We can do something similiar using sockets. Node uses sockets as a TCP server.

```
var net = require('net');

net.createServer(function(socket){
	socket.write('hello/n');
	socket.write('world/n');

	socket.on('data', function(data){
		socket.write(data);
	})
})

server.listen(8124);

```
Now let's use our TCP server to build a chat client:

```
var net = require('net');

var sockets = [];

var s = net.createServer(function(socket){
	sockets.push(socket);
	socket.on('data', function(d){
		for(var i = 0; i < sockets.length; i++){
			if (sockets[i] == socket) continue;
			sockets[i].write(d);
		}
	});
	socket.on('end', function(){
		var i = sockets.indexOf(socket);
		sockets.splice(i,1);
	});
});

s.listen(8000);

``` 
Now in Terminal, type the following and we can chat over the TCP network:

```
telnet 10.1.4.239 8000  // (or whatever IP address shows in Network Utility)

```
In traditional PHP Server connections, you open a connection, perform a task and then close the connection each time. Node keeps the connection open.

Node is great for running a bunch of processes simultaneously. We can ask ab (Apache bench ) to simulate what would happen if 100 requests in parallel. With PHP, we would expect each request to take 2 seconds. Instead, Node will do them all at once:

```
ab -n 100 -c 100 http://127.0.0.1:8000/

```
This makes Node the perfect tool for reactive frameworks.

#### Connections
Why should we care about Node?
- We will use npm to install packages. Let's understand what it is!
- Express is a front end framework we will use to build projects in Node
- Angular is a front end framework which CAN be used to build projects in Node
- Lots of established SF companies and startups use Node for one or more products
- Node is great when you need lots of simultaneous connections on one server

### Awesome Links:
[Ryan Dahl video from which this material was ripped](https://www.youtube.com/watch?v=jo_B4LTHi3I)

[Node API documentation](https://nodejs.org/api/)

### Quotes from Ryan Dahl (creator of Node):

>"Node is a bunch of sugar (a set of libraries) written on top of the Google V8 Virtual Machine (modern Google Chrome)."

>"Node uses the awesomeness of V8 to do networky things, properly"

>"Node is not in the browser. Instead of a window object you have a process object"

>"This is the foundation of what you want underneath your web stack."

>"Front end frameworks go on top of Node."