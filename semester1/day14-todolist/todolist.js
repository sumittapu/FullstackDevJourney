const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let todos =[];

function showMenu() {
    console.log("\n==== TO - DO LIST ====");
    console.log("1. Add Task");
    console.log("2. View Task");
    console.log("3. Delete Task");
    console.log("4. Exit");

    r1.question("Choose an option", handleChoice);
}

function handleChoice(choice) {
    switch (choice) {
        case "1": 
        r1.question("Enter a new task:", (task) => {
            todos.push(task);
            console.log(`Task added: ${task}`);
            showMenu();
        });
        break;

        case "2":
            console.log("\nYour Tasks:");
            if (todos.length === 0)
                console.log("No tasks found!");
            else todos.forEach((t, i) => 
                console.log(`${i + 1}. ${t}`));
            showMenu();
            break;

        case "3":
        r1.question("Enter task number to delete: ", (num) => {
            const index = parseInt(num) - 1;
            if (index >= 0 && index < todos.length) {
                console.log(`Deleted: ${todos[index]}`);
                todos.splice(index, 1);
            } else console.log("Invalid number!");
            showMenu();
        });
        break;
        case "4":
            console.log("Exiting Program...");
            r1.close();
            break;

            default: console.log("Invaid option!");
            showMenu();
    }
}

showMenu();