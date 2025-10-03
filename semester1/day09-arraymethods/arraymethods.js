//1. map()

let numbers = [1, 2, 3, 4];
let squares = numbers.map(n => n * n);
console.log(squares);

//2. filters()

let nums = [5, 12, 8, 130, 44];
let bigNums = nums.filter(n => n > 10);
console.log(bigNums);

//3. reduce()

let values = [1, 2, 3, 4];
let sum = values.reduce((acc, n) => acc + n, 0);
console.log(sum);
