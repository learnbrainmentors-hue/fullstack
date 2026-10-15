const fs = require('fs');
console.log("A Sync Console");
setTimeout(()=>{
    console.log("B Timeout ");
}, 0);
setImmediate(()=>console.log("B.2 SetImmediate"));
Promise.resolve().then(()=>console.log("C Promose Resolve "));
process.nextTick(()=>console.log("D Next Tick" ));
fs.readFile(__filename, (err, content)=>{
    setTimeout(()=>console.log("E Timeout"), 0);
    setImmediate(()=>console.log("F Immediate"));
});
console.log("G Sync Console" );