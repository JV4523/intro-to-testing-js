// helloWorld function 
// //function helloWorld() {
//     console.log("Hello, World!");
// }
// const helloWorld = function() {
//     return "Hello, World!";
// }
// const sayHello = function(input) {
//     return "Hello, " + input + "!";
// }

function sayHello(input){
    if (typeof input === 'boolean') return "Hello, World"
    else return "Hello, " + input + "!";
}