const EventEmitter = require('events');
// console.log(EventEmitter);
const customEmitter = new EventEmitter();
// console.log(customEmitter);
customEmitter.emit('response');    // this should be in order.
customEmitter.on('response',()=>{
    console.log('data received');
});
customEmitter.on('response',(name,id)=>{
    console.log('some other logic');
    console.log(name+"="+id);
});
customEmitter.on('response2',()=>{
    console.log('data-2 received');
});

customEmitter.emit('response','mahi',36);
customEmitter.emit('response2');