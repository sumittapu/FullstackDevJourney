//1. 

function divide(a,b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a/b;
}

//2.

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.log("Error caught:", error.message);
}

//3.

try {
    let data = JSON.parse(`{name:"Tapu"}`);
    console.log(data);
} catch (err) {
    console.log("JSON Error:", err.message);
}

//4.

try {
    console.log(divide(20, 0));
} catch (e) {
    console.log("Caught Error:", e.message);
} finally {
    console.log("Program finished");
}