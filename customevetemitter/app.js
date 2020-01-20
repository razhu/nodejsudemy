const Emitter = require('./emitter');
let emit = new Emitter();
emit.on('greet', function () { // this is a listener
    console.log('sending greetings!');
})
emit.on('bye', function () { // this is a listener
    console.log('sending byes!');
})
emit.on('greetx', function () { // this is a listener
    console.log('sending greetx!');
})
emit.on('greet', function () { // this is a listener
    console.log('sending greetings 222!');
})

emit.emit('greet');
emit.emit('greet');
emit.emit('bye');
emit.emit('greetx');