//1. 

let person = {
    name: "Tapu",
    age: 25,
    city: "Barasat",
    isEmployed: true,
};

console.log("Person Object:", person);
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
console.log("Employed:", person.isEmployed);

//2.

person.city = "Kolkata";
console.log("Updated City:", person.city);

//3.

person.hobby = "Coding";
console.log("After adding hobby:", person);

//4.

person.address = {
    area: "Salt Lake",
    pin: 700091
};

console.log("Person Address:", person.address);
console.log("Pin Code:", person.address.pin);

//5. Practice

for (let key in person) {
    console.log(key + ":" + person[key]);
}