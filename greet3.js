function Greeting() {
    this.greeting = 'Greeting3';
    this.greet = () => {
        console.log(this.greeting);
    }
}
module.exports = new Greeting();