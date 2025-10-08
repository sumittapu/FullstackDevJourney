//1. countdown

function countdown(n) {
    if (n === 0) return;
    console.log(n);
    countdown(n-1);
}

countdown(5);

//2. factorial

function factorial(o) {
    if (o === 1) return 1;
    return o * factorial(o - 1);
}

console.log(factorial(5));

//3. sum of first p numbers

function sum(p) {
    if (p === 0) return 0;
    return p = sum(p - 1);
}

console.log(sum(5));

//4. fibonacci series

function fib(q) {
    if (q <= 1) return q;
    return fib (q - 1) + fib(q - 2);
}

function printFibSeries(q) {
    for (let i = 0; i < q; i++) {
        console.log(fib(i));
    }
}

printFibSeries(7);