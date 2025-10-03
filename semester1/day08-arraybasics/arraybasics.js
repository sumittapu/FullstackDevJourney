//1. array create

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

//2. access elements

console.log(fruits[0]);
console.log(fruits[2]);

//3. modify elements

fruits[1] = "Orange";
console.log(fruits);

//4. array properties

console.log("Length: ", fruits.length);

//5. push/pop/shift/unshift

fruits.push("Grapes");
fruits.pop();
fruits.unshift("Pine");
fruits.shift();
console.log(fruits);