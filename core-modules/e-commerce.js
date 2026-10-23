import {EventEmitter} from 'node:events';
const bus = new EventEmitter();
function orderBook(o){
    console.log("Order Book");
}
function payment(){
    try{
        throw new Error('Payment Fail...');
    //console.log("Payment");
    }
    catch(err){
        bus.emit('error', err);
    }
}
function email(){
    console.log("Email");
}
function error(err){
    console.log('Error is ::::: ', err);
    //throw new Error('Something went wrong...');
}
bus.on('order-book', orderBook);
bus.on('payment', payment);
bus.on('send-email', email);
bus.on('error', error);

bus.emit('order-book', 'Iphone...');
bus.emit('payment', payment);
//bus.emit('error',  new Error('Something Went Wrong'));