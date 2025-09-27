// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log("Add:",a+b);
console.log("Substract", a-b);
console.log("Multiply:", a*b);
console.log("Divide:", a/b);
console.log("Modulus:", a%b);
console.log("Power:", a**b);

// 2. comparison + logical operators
let marks = 85;
let age = 17;
let hasID = true;

console.log("Is pass?", marks >= 40);
console.log("Is adult?", age >= 18);
console.log("Can enter exam?", hasID && age >= 18);
console.log("Special case?", hasID || age>= 18);

// 3. === vs ==
console.log(5 == "5");
console.log(5 === "5");

// 4. Bonus temperature converter
let celsius = 30;
let fahrenhite = (celsius *9/5)+32;
console.log(celsius + "^C", fahrenhite + "^F");