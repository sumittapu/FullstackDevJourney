//1. if/else

    let age = 18; 

    if (age >= 18){
        console.log("You can vote!");
    } else {
        console.log("You cannot vote yet.");
    }

//2. if/else if/else
   
    let marks = 75;

    if (marks >= 90) {
        console.log("Grade: A+");
    } else if (marks >= 75) {
        console.log("Grade: A");
    } else if (marks >= 50) {
        console.log("Grade: B");
    } else {
        console.log("Fail");
    }

//3. switch statement

    let day = 3;

    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        default:
            console.log("Other day");
    }

//4. Bonus: Temperature Condition

    let temp = 28;

    if (temp > 30) {
        console.log("Hot");
    } else if (temp >= 15 && temp <= 30){
        console.log("Pleasant");
    } else {
        console.log("Cold");
    }
    