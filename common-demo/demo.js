// module.exports vs exports
console.log(module.exports == exports);
console.log(module.exports , " ", exports);
// exports.a = 10;
// exports.b = function(){
//     console.log(" i am the b function");
// }
exports = {a:10, b : function(){
    console.log(" i am the b function");
}}
console.log(module.exports == exports);