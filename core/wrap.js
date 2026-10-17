console.log("I am the Node JS");
console.log(arguments.length);
// Wrapper Exist
// IIFE - Immediate Invoke Function Expression
//global
// (function(exports, require, module,__filename, __dirname){
//     console.log("I am the Node JS");
// })();
// all top level variables in function scope - exports, require, module,__filename, __dirname
const os = require('os'); // node internal (core module)
var a = 100;
const {add, subtract, mul} = require('./calc');
console.log('Caching ', Object.keys(require.cache));
// delete require.cache[1];
console.log('Caching ', Object.keys(require.cache));
console.log(add(10,20));
console.log(subtract(1,2));
console.log(mul(100,200));
console.log(module.exports == exports);
console.log(module.exports);
console.log(exports);
console.log(__filename);
console.log(__dirname);

//console.log(globalThis, global);
//console.log(globalThis == global);
console.log(this == module.exports);
global.console.log("I am Output");
console.log("I am Output2");
console.log("setImmediate" in global); // true
console.log("require" in globalThis); // false
console.log(module.id); 
console.log(module.filename);