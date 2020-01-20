function greet (callback) {
    console.log('hello');
    let data = {
        name: 'juan perez'
    }
    callback(data);
}

greet((datax)=>{
    console.log('callback invoked 1');
    console.log(datax);
})
greet((datax)=>{
    console.log('callback invoked 2');
    console.log(datax);
})