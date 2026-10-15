console.log("Start");
const fs = require('fs');
let start = Date.now();
const os = require('os');
console.log('Core '  , os.availableParallelism());
let cores = os.availableParallelism();
process.env.UV_THREADPOOL_SIZE=8;
//for(let i = 1; i<=cores; i++){
fs.readFile('/Users/amitsrivastava/Documents/node-class-codes/order.js', (err, content)=>{
    if(err){
        console.log('Error ', err);
    }
    else{
        console.log("1. Thread ", Date.now() - start);
    }
})

fs.readFile('/Users/amitsrivastava/Documents/node-class-codes/one.js', (err, content)=>{
    if(err){
        console.log('Error ', err);
    }
    else{
        console.log("2. Thread ", Date.now() - start);
    }
})

fs.readFile('/Users/amitsrivastava/Documents/node-class-codes/event-loop.js', (err, content)=>{
    if(err){
        console.log('Error ', err);
    }
    else{
        console.log("2. Thread ", Date.now() - start);
    }
})

fs.readFile('/Users/amitsrivastava/Documents/node-class-codes/single-thread.js', (err, content)=>{
    if(err){
        console.log('Error ', err);
    }
    else{
        console.log("2. Thread ", Date.now() - start);
    }
})

fs.readFile('/Users/amitsrivastava/Documents/node-class-codes/abcd.txt', (err, content)=>{
    if(err){
        console.log('Error ', err);
    }
    else{
        console.log("2. Thread ", Date.now() - start);
    }
})

fs.readFile('/Users/amitsrivastava/Documents/node-class-codes/qqq.txt', (err, content)=>{
    if(err){
        console.log('Error ', err);
    }
    else{
        console.log("2. Thread ", Date.now() - start);
    }
});
//}
