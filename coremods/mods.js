const util = require('util');

let name = 'ramiro';
let greeting = util.format('hello, %s', name);
util.log(greeting);