// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {    //listening the event : performing function as a result of an event
 /* name="usama asnar"
  id=001*/
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'Usama', 001)  // these values are passed into function at line 13
//customEmitter.emit('response')          //emitting the event that have been listened we cannot emit befr listening