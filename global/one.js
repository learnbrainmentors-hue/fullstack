// Main Script
globalThis.console.log("Hello Node JS");
// settimeout + setinterval - timer phase
globalThis.setTimeout(()=>console.log("I am the setTimeout Function "),0); // fire after 0 ms (once)
const t = globalThis.setInterval(()=>console.log("I am the SetInterval "), 4000); // repeat after 4 second
console.log("T is ", t);
console.log("T type is ", typeof t);
// setImmediate - check phase
globalThis.setImmediate(()=>console.log("I am the SetImmediate ")); // run in check phase

const fs = require('fs'); // Common JS
fs.readFile(__filename, (err, content)=>{
    if(err){
        console.log('Error is ', err);
    }
    else{
        t.unref();
        setTimeout(()=>console.log("I am the Timeout in callback "),0);
        setImmediate(()=>console.log("I am the SetImmediate in callback "));
    }
})