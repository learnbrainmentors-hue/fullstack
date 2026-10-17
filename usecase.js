// i want to create connection to the DataBase
const {EventEmitter} = require('events');
class DBConnection extends EventEmitter{
    // constructor call when u create the object and it do initalization
    constructor(){
        super(); // call eventEmitter constructor
        // Fire the Events
        //this.emit('connect'); // u fire the event
       process.nextTick(()=> this.emit('connect'));
    }
}
// when object construct so constructor call
const db = new DBConnection(); // new DBConnection - it create a new object , so it call constructor
// Event Driven Programming
db.on('connect', ()=>console.log('DB Connection Establish')); // event register



// emit - fire the event
// on - register the event