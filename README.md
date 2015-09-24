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

Quotes from Ryan Dahl (creator of Node):

>"Node is a bunch of sugar (a set of libraries) written on top of the Google V8 Virtual Machine (modern Google Chrome)."

>"Node uses the awesomeness of V8 to do networky things, properly"

>"Node is not in the browser. Instead of a window object you have a process object"

>"This is the foundation of what you want underneath your web stack."

>"Front end frameworks go on top of Node."

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
```
function sayHi() { 
	console.log('Oh, Hey!') 
};

setTimeout(sayHi, 5000);

console.log('Hi there');
```

1. [First Server](example-node-server.js)
1. [First TCP Sockets](tcp-node-server.js)
1. [Chat Server](node-chat-server.js)

#### Connections
Why should we care about Node?
- We will use npm to install packages. Let's understand what it is!
- Express is a front end framework we will use to build projects in Node
- Angular is a front end framework which CAN be used to build projects in Node
- Lots of established SF companies and startups use Node for one or more products
- Node is great when you need lots of simultaneous connections on one server