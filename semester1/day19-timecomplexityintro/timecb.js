// O(1) → Constant Time
function getFirstElement(arr) {
  return arr[0];
}

// O(n) → Linear Time
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// O(n²) → Quadratic Time
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

// O(log n) → Logarithmic Time
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// O(2ⁿ) → Exponential (slow!)
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}



function sumLoop(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}




function sumRecursion(n) {
  if (n === 1) return 1;
  return n + sumRecursion(n - 1);
}


function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}


function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}
