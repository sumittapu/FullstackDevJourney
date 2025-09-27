//1. for loop

console.log("----- For loop -----");
for (let i = 1; i<=5; i++) {
    console.log("Number:", i);
}

//2. while loop

console.log("----- While loop -----");
let n = 1;
while (n<=5) {
    console.log("Count:", n);
    n++;
}

//3. do...while loop
console.log("----- Do...while loop -----");
let m = 1;
do {
    console.log("Do count:", m);
    m++;
} while (m <= 5);

//4. For...of loop (array)
console.log("----- For...of loop -----");
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log("Fruits:", fruit);
}
