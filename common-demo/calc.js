
var counter = 0;
function increment(){
    counter++;
    console.log("INC ::: Counter is ", counter);
}
module.exports = {counter, increment};
// console.log(exports == arguments[0]);
// console.log(arguments);
//console.log(arguments);

