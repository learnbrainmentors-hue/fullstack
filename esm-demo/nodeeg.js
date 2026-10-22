import fs from 'node:fs';
fs.writeFile('abcd.txt',"Hello Data", (err)=>{
    if(err){
        console.log('Unable to write');
    }
    else{
        console.log('Write...');
    }
});