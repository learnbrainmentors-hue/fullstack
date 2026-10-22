export function add(x,y){
    return x + y;
}

export var counter = 0;
export function increment(){
    counter++;
}

function show(){
    disp();
}

function disp(){
    console.log("I am the Disp");
}

export default show;


