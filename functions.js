// function statement
function greet() {
    console.log('Hi');
}
greet();
// functions are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);
// funtion expression

let greetFn = () => {
    return greet();
}
greetFn();
// passing around fist class functions0
logGreeting(greetFn);

logGreeting(()=>{
console.log('hola desde lago extraño');
})