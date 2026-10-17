// Code to Run HTTPS Server
console.log("I am the HTTPS Server");
process.on('uncaughtException', err=>{
    console.error('SOmething went Wrong ', err);
    console.log(health());
    // Log File - Proper Error
    // Code for Mail, What's App
    process.exit(1);
    
})
process.on('unhandledRejection', reason=>{

});
// Server Health
function health(){
    const memory = process.memoryUsage();
return {"pid": process.pid, "version":process.version, "memory" : memory, "heaptotal": memory.heapTotal, "heapused": memory.heapUsed};
}
process.on('SIGINT', ()=>{
    console.log('SOme body press ctrl + c to stop the server');
    // db.close()
    //socket.close()
})
process.on('SIGTERM', ()=>{
    console.log('Docker Stop , Kubernetes Stop');
    // db.close()
    //socket.close()
})
const ENV = process.argv[2];
if(ENV ==='PROD'){
    console.log('Connect to the Production DB');
}
else if(ENV ==='DEV'){
console.log('Connect to the DEV DB');
}

//console.log(process.argv[2]);