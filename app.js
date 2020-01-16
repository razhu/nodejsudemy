// 1st formn to invoke
// let greet = require('./greet.js');
// greet()
// 2nd form to invoke
// require('./greet.js')()

/*
var a = 1;
var b = 2;
var c = a + b;
console.log(c);
*/

// ...... multiple exports
const greet = require('./greet');
greet.es();
greet.en();