const EventEmitter=require('events')
const emitter= new EventEmitter();
emitter.on('hello',()=>{
    console.log('hello')

})
emitter.emit('hello')