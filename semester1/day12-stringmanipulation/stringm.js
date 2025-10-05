//1.

let str = "JavaScript is Awesome!";

console.log(str.length);
console.log(str.toLowerCase());
console.log(str.replace("Awesome", "Powerfull"));

//2.

let names = "Amit, Riya, Rahul, Soumya";
let arr = names.split(",");
console.log(arr);

//3.

let messy = "    Hello Tapu!    ";
console.log(messy.trim());

let word = "JavaScript";
console.log(word.slice(0, 4));
console.log(word.substring(4));

//4.

let nam = "Tapu";
let age = 25;
let city = "Barasat";

console.log(`My name is ${nam}, I am ${age} years of old and I live in ${city}.`);