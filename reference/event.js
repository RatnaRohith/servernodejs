const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter{}

//Init Object
const myEmitter = new MyEmitter();

myEmitter.on('event', () => console.log('Event fired'));

myEmitter.emit('event');