const fruts = ['apple', 'banana', 'orange', 'kiwi'];
const vegetables = ['carrot', 'broccoli', 'spinach', 'potato'];

// Concatenating arrays
const food = fruts.concat(vegetables);
console.log('Concatenated array:', food);

// spreading arrays
const moreFruits = [...fruts, ...vegetables];
console.log('Spread array:', moreFruits);


const nastedArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9,[10, 11]]];
// Flattening nested arrays
const flattenedArray = nastedArray.flat(Infinity);
console.log('Flattened array:', flattenedArray); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//converting string to array
const str = 'Hello, World!';
const strArray = Array.from(str);
console.log('String to array:', strArray); // output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']


// converting integer to array
let num = 12345;
let num2 = 67890;
let num3 = 1234567890;
console.log(Array.of(num, num2, num3)); // output: [12345, 67890, 1234567890]