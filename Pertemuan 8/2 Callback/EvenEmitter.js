//Import event module 
var events = require('events');

//Crean eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create an event handler as follows 
var connecthandler = function connected() {
    console.log('connection successful.');
    //Fire the data_received event
    eventEmitter.emit('data_received');
}

//Bind the connection event with the handler
eventEmitter.on('connection', connecthandler);

//Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
    console.log('data received successful.');
});

//Fire the connection event
eventEmitter.emit('connection');
console.log("Program Ended.");