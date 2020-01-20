let buf = new Buffer('hello', 'utf8');
console.log(buf); // this is actualy binary, it shows it in hx becuase it is easier to read.
console.log(buf.toJSON());
console.log(buf[2]);
// write data to buffer
buf.write('k')
console.log(buf.toString());

buf.write('fuckyou')
console.log(buf.toString());