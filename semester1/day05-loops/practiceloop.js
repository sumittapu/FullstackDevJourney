// Day 5: Loops Practice

// 1️⃣ For loop: 1 to 10 print
console.log("----- For loop 1 to 10 -----");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2️⃣ While loop: 10 to 1 print
console.log("----- While loop 10 to 1 -----");
let n = 10;
while (n >= 1) {
  console.log(n);
  n--;
}

// 3️⃣ For...of loop: string letters
console.log("----- For...of loop on string -----");
let word = "JavaScript";
for (let letter of word) {
  console.log(letter);
}

// 4️⃣ Bonus: Even numbers 1-100
console.log("----- Even numbers 1 to 100 -----");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
