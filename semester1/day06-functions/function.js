//1. function basics

function greet(name) {
    console.log("Hello," + name + "!");
}

greet("Tapu");
greet("Sumit");

//2. function with return

function add(a,b) {
    return a + b;
}

let result = add(5, 7);
console.log("Sum:", result);

//3. arrow functions

const multiply = (x,y) => x * y;
console.log(multiply(4,5));

 //4. default parameters

 function sayHello(name = " Guest") {
    console.log("Hello" + name);
 }

 sayHello();
 sayHello(" Tapu");