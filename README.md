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


## What is Node.js? - Intro (20 mins)

The makers of Node.js took javascript (which normally only runs in the browser) and made it available in your computer (on the server side). They took Google's V8 JavaScript Engine and gave it the ability to compile JS programs into machine code.

Keep in mind, Node.js is strictly a tool to run JavaScript on a server – while it's possible to build web applications and APIs in straight JS, we'll actually be using a framework on top of Node called Express. <!-- It's actually quite similar to Sinatra - you'll like it! -->

#### Why are people excited about Node?

It's new and hot in the industry but why does it matter?

A lot of developers and companies are excited because it allows you to build fast, scalable APIs and sites in JavaScript. We're _familiar_ with JS and being able to use it on the backend gives us the option to use a single programming language throughout an entire full-stack application.

#### Asynchronous

On top of that, one of the big differences is that Node.js is designed to be _event-driven_ and _asynchronous_. While earlier frameworks can only do one thing at a time, Node purposefully sends nearly everything to the background and keeps going.

Imagine a paper delivery boy riding on his bike delivering papers every morning. Imagine he stops at each house, throws the paper on your doorstep, and waits to make sure you come out & pick it up before moving on to the next house. That would be what we'd call _blocking_ – each line of code finishes before moving on to the next line of code.

Now imagine the paperboy throwing the newspaper on your porch but never stopping his bicycle; never stopping, he just keeps throwing papers on porches, so that by the time you pick it up he'll be 3 or 4 houses down. That would be _non-blocking_, or _asynchronous_.

While it means you'll have to think & write your code a little differently than you did with a blocking framework like Sinatra or Rails, the benefit of speed is one thing a lot of folks are excited about with the introduction of Node.

#### Ruby/Rails/Sinatra vs. JS/Node/Express

While not strictly a competition (one of the skills you have to practice is knowing which frameworks you should use in which situations), let's compare some differences.

__Why Choose Sinatra/Rails?__
- Quickest path to building app with full CRUD
- Better at working with complex data relationships - ActiveRecord rocks!
- When full page refreshes aren't an issue
- Synchronous programming is probably a little easier to grasp in building a straightforward program

__Why Choose Node/Express?__
- JavaScript everywhere, one language to rule them all
- Asynchronous means generally faster performance
- Better _concurrency_ – it can serve data to more users with fewer computer resources
- Designed to make realtime applications

#### Installing Node.js

To check if we already have Node installed, type: ``node -v`` in terminal. You will see the Node version if it's installed.

If it's not installed, you can install from the Node.js website, or better yet, use Homebrew like this:
```
brew install node
```

This will install both Node.js and npm, a package manager for Node similar to rubygems for Ruby. One of the advantages of using Homebrew is that you can update your versions easily like this:

```
brew upgrade node
```


## Getting reacquainted with JS - Codealong (10 mins)

Before we go further, you should try test it out. You'll have to start refreshing the JS side of your brain, so spend a couple minutes testing out some basic JS and running it with Node.

There are two ways to do this – try them both.

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

console.log('Hello');

var s = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  setTimeout(function(){
  	response.end('World\n');
  }, 4000);
});

s.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

```
In terminal type the following line to log messages to the REPL:
``` curl -i http://localhost:8124/ ```

We can do something similiar using sockets. Node uses sockets as a TCP server.

```
var net = require('net');

var server = net.createServer(function(socket){
	socket.write('hello/n');
	socket.write('world/n');

	socket.on('data', function(data){
		socket.write(data);
	});
});

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

