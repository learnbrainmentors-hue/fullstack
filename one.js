// Runtime Embed Binary Code (settimeout, process, etc)

console.log("I am the Sync Task :: Start"); // Sync 
setTimeout(()=>{
    console.log(" I am run After 4 seconds");
}, 4000);
// setTimeout(callbackfunction, time);
// const promise = fn();
// promise.then(callbackfn).catch(callbackfn)
console.log("Code Ends :: ");  // Sync 