/*
Simulation of Main Thread
when u do node <filename.js>
*/
function mainThread(){
    // it read ur code file from top to bottom
    // run your file in stack (from top to bottom)
    runOnStack("main (myfile.js)", myfilecontent);
    runmicrotasks(); // 1. process.nextTick 2. Promise.resolve().then()
    eventLoopSixPhases(); 
    // No work left so threads ends --> process.exit
}

/*
Event Loop - While Loop on the main Thread, that keep tracking what is in the queue

Tick - One full round through all 5 phases
*/
// Built DS
const pendingTimers = []; // Timer Queue
const pendingOSTasks = []; // OS Operations (OS Queue)
const pendingOperations = []; // IO Operations (IO Queue)

function isAlive(){
    // return true if alive
    // return false if not alive
    // just for example
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;

}
// this is the event Loop
while(isAlive()){
 // Event Loop walk through from the five phases
 /* Phase - 1 (Timers) - check timers whose time is up e.g setTimeout, put in timer queue
  Phase - 2 (Pending CallBacks) - It is OS Pending Tasks e.g server listen to port
  (Pending OS Tasks CallBack)
  Phase - 3 (Poll) - Finished I/O Tasks e.g file read, data recieved (CallBack )
  Phase - 4 Check - setImmediate callback
  Phase - 5 (Close CallBacks) - close events e.g socket.on('close', callback)
  // Node Look all 5 phases
  */
 
}