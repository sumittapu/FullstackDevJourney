const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter operator (+,-,*/): ", (op) => {
        rl.question("Enter second number : ", (num2) => {
            let a = parseFloat(num1);
            let b = parseFloat(num2);
            let result;

            if (op === "+") {
                result = a + b;
            } else if (op === "-") {
                result = a - b;
            } else if (op === "*") {
                result = a * b;
            } else if (op === "/") {
                result = a / b;
            } else {
                result = "Invalid operator!";
            }

            console.log(`Result: ${result}`);
            rl.close();
        })
    })
})