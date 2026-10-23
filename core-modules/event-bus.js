import {EventEmitter} from 'node:events';
const bus = new EventEmitter();

function orderBook(o){
    console.log('Order Book ', o);
}
// Event Listener
bus.on('order-book', orderBook);
bus.on('order-book', (o)=>{
    console.log('Send Mail...', o);
});

bus.emit('order-book', 'Iphone'); // Event Fire
bus.emit('order-book', 'Tablet');
bus.once('login', (user)=>{
    console.log('User Login..');
})
bus.off('order-book', orderBook);
bus.emit('order-book', 'Shoes');
// bus.emit('login', 'amit');
// bus.emit('login', 'amit');