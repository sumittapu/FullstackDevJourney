let students = new Map();

students.set("Tapu", 95);
students.set("Rahul", 88);
students.set("Riya", 92);

for (let [name, marks] of students) {
    console.log(`${name} scored ${marks}`);
};

let nums = new Set([10, 20, 10, 30, 20, 40]);
console.log(nums);

let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr)];

console.log(uniqueArr);