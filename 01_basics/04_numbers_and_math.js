const number = 123.2346;

// toFixed() method formats a number using fixed-point notation
console.log(number.toFixed(2)); // Output: 100.23

// toPrecision() method formats a number to a specified length
console.log(number.toPrecision(4)); // Output: 100.2

// toExponential() method formats a number in exponential notation
console.log(number.toExponential(3)); // Output: 1.00e+2

//tolocaleString() method converts a number to a string using locale-specific conventions
const number2 = 10000000;
console.log(number2.toLocaleString('en-BD')); // Output: 123.2346


//------------------------------------------- Math ----------------------------------------------------- //

console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.E); // Output: 2.718281828459045
console.log(Math.abs(-10)); // Output: 10
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.floor(4.8)); // Output: 4
console.log(Math.round(4.5)); // Output: 5
console.log(Math.max(1, 2, 3)); // Output: 3
console.log(Math.min(1, 2, 3)); // Output: 1
console.log(Math.random()*50); // Output: Random number between 0 and 1
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.pow(2, 3)); // Output: 8 (2 raised to
// the power of 3)
console.log(Math.log(10)); // Output: 2.302585092994046 (natural logarithm of 10)
console.log(Math.log10(100)); // Output: 2 (base 10 logarithm of 100)   
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sine of 90 degrees)
console.log(Math.cos(Math.PI)); // Output: -1 (cosine of 180 degrees)

