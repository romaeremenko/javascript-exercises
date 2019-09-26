// Write a JavaScript program to calculate the factorial of a number. 
// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(number){
  if(number == 0) return 1;
  return number * factorial(number-1);
}

console.log(factorial(5));

// Write a JavaScript program to get the first n Fibonacci numbers

function fibonacci(n){
  return n<=1 ? n : fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci (5));

// Write a JavaScript program to compute the exponent of a number

const exp = (number, exponent) => exponent <= 0 ? 1 : number * exp(number, exponent -1);
console.log(exp(2,3));

// Write a JavaScript program to compute the sum of an array of integers.

const sum = (array, index=0, compute = 0) => index >= array.length - 1 ? 1 : compute + sum(array, index + 1, compute + array[index]);
console.log(sum([1, 2, 3, 4, 5, 6]));

// Write a JavaScript program to get the integers in range (x, y)

function range (from, to) {
  if(from >= to) return 1;
  console.log(from);
  return 1 + range(from+1, to);
} 

console.log(range(1,9));