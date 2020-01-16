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
// const greet = require('./greet');
// greet.es();
// greet.en();

// ---------------module patters|
const g1 = require('./greet1');
g1();

const g2 = require('./greet2').greet2;
g2()

// --- con clase y objets
const g3 = require('./greet3')
g3.greet();

// without instantiate
const g4 = require('./greet4');
console.log('ddd ', typeof g4);
let a = new g4();
a.greet()

// manera 5
const g5 = require('./greet5');
g5();

