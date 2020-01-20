// this is a function constructor
function Emitter() {
    this.events = {}
}
// this
Emitter.prototype.on = function (type, listener) { // on a kinda keyword for an event listener
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    console.log(this.events);
    if (this.events[type]){
        this.events[type].forEach((listener) => {
            listener();
        })
    }
}

module.exports = Emitter;