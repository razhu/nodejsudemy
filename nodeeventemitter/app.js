const Emitter = require('events');
const config = require('./config').events;
let emit = new Emitter();
emit.on(config.GREET, function () { // this is a listener
    console.log('sending greetings!');
})
// emit.on('bye', function () { // this is a listener
//     console.log('sending byes!');
// })
// emit.on('greetx', function () { // this is a listener
//     console.log('sending greetx!');
// })
emit.on(config.GREET, function () { // this is a listener
    console.log('sending greetings 222!');
})

emit.emit(config.GREET);
emit.emit(config.GREET);
// emit.emit('bye');
// emit.emit('greetx');