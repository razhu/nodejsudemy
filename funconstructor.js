function Person(firstaname, lastname) {
    this.firstaname = firstaname;
    this.lastname = lastname;
}

Person.prototype.greet = someName => {
    console.log('saludos ' +  someName);
}

var jobn = new Person('John', 'Perez');
console.log('jobn');
jobn.greet('John')

console.log(new Person('Maria', 'Lopez'));
// console.log('-----------__> jobn ', jobn);
// console.log(jobn.firstaname);

console.log('proto content ', jobn.__prototype___);