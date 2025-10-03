let nums = [1, 2, 3, 4, 5];

let result = nums
.map(n => n*n)
.filter(n => n % 2 === 0)
.reduce((acc, n) => acc + n, 0)

console.log("Final Result: ", result);