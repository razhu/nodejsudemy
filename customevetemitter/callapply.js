const obj = {
    name: 'ramiro',
    lastname: 'huayller',
    greet: function (age) {
        console.log(`hi there ${this.name} ${this.lastname} my aget is ${age}`);
    }
}


obj.greet(12);
obj.greet.call({name: 'ana', lastname: 'dksf'}, 13);
obj.greet.apply({name: 'ana', lastname: 'dksf'}, [14]);