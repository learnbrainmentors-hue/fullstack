const fs = require('fs');
console.log("1 . Start Sync");
setTimeout(()=>{
    console.log("2. SetTimeout ")
},0);
setImmediate(()=>console.log("3. SetImmediate"));
process.nextTick(()=>console.log("4. I am the VIP nextTick ")); 
Promise.resolve().then(()=>console.log("5. I am the VIP Next MicroTask Queue "));
fs.readFile(__filename, (err, content)=>{
    if(err){
        console.log("Error is Coming ", err);
    }
    else{
        setTimeout(()=>{
    console.log("6. SetTimeout Inside fs Callback ")
},0);
setImmediate(()=>console.log("7. SetImmediate Inside fs callback"));
        process.nextTick(()=>console.log("8. I am Process.nextTick inside the callback"));
        Promise.resolve().then(()=>console.log("9. I am the Promise.resolve().then inside the callback "));
    }
})
Promise.resolve().then(()=>console.log("12. I am the VIP Next MicroTask Queue "));
process.nextTick(()=>console.log("11. I am the VIP nextTick ")); 
console.log("10. End Sync");