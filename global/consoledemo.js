console.log("Terminal Log");
console.error("Error On terminal");
const products = [{name:'Apple', price : 90000}, {name:'Samsung', price : 80000}];
console.log(products);
console.table(products, ['name', 'price']);
const arr = ['amit', 'ram', 'amit', 'ramesh','amit'];
console.assert(arr.length<3, 'Wrong Number of Users'); // Testing
console.time('per-time'); // start stopwatch
for(let i = 1; i<=1e6; i++){

}
console.timeEnd("per-time"); // stop stopwatch


for(const name of arr){
    console.count(name);
}
const obj = {id:{rollno:1001, address:{city:'Delhi', location :{lat:1, lng:5}}}};
//console.log(obj);
console.dir(obj,{depth:5});

