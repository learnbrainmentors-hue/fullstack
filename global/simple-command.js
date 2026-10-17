// node simple-command.js 10 20 30 40 50
const r = process.argv.length;
//process.exit(0);
process.exit(1); // exit with error
let sum = 0;
for(let i = 2;  i<r; i++){
 sum = sum + parseInt(process.argv[i]);
}
console.log(sum);


// CLI