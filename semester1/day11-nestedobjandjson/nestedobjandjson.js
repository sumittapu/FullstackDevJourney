//1.

let student = {
  name: "Tapu",
  age: 25,
  address: {
    city: "Barasat",
    state: "West Bengal",
    pin: 700124
  }
};

console.log("Student City:", student.address.city);

//2.

const jsonData = JSON.stringify(student);
console.log("JSON String:", jsonData);

const parsedStudent = JSON.parse(jsonData);
console.log("Parsed Object:", parsedStudent);
console.log("Parsed City:", parsedStudent.address.city);

//3.

const company = {
  name: "TechNova",
  employees: [
    { name: "Amit", role: "Developer" },
    { name: "Riya", role: "Designer" },
    { name: "Sourav", role: "Tester" }
  ]
};

// loop দিয়ে সব নাম print করো
for (let emp of company.employees) {
  console.log(emp.name + " – " + emp.role);
}

//4.

function addEmployee(companyObj, empName, empRole) {
  companyObj.employees.push({ name: empName, role: empRole });
  console.log(`✅ Added ${empName} as ${empRole}`);
}

addEmployee(company, "Tapu", "Project Manager");
console.log(company.employees);