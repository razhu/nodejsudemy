function Greeting() {
    this.greeting = 'Greeting4';
    this.greet = () => {
        console.log(this.greeting);
    }
}
module.exports = Greeting;