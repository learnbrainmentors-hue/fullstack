import {builtinModules} from 'module';
import fs from 'node:fs';
import {readFile} from 'node:fs/promises';
console.log(builtinModules.length);
const path = '/Users/amitsrivastava/Documents/node-class-codes/core-modules/sample.txt';

const data = await readFile(path);
console.log('Data is ', data);
// promise.then(data=>{
//     console.log('Data is ',data.toString());
// }).catch(err=>{
//     console.log('Error is ', err);
// })


// const promise = readFile(path);
// promise.then(data=>{
//     console.log('Data is ',data.toString());
// }).catch(err=>{
//     console.log('Error is ', err);
// })

// fs.readFile(path, (err , buffer)=>{
//     if(err){
//         console.log("Error in File read ", err);
//     }
//     else{
//         console.log(buffer.toString());
//     }
// }

// ); // Some other thread can do this
for(let i = 1; i<=10; i++){
    console.log("Main Thread doing something else...");
}
// Main Thread - i can do something else - i am not block

// Sync - Main Thread Block
// try{
// //const result = fs.readFileSync(path); // Buffer

// //console.log('Result is ', result.toString()); 
// }
// catch(err){
//     console.error(err);
// }