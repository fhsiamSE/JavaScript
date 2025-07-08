const array = [1, 2, 3, 4, 5];

// Accessing elements
console.log(array[0]); // Output: 1

array[0] = 10; // Changing the element
console.log(array[0]); // Output: 10

// Adding elements
array.push(6); // Adds 6 to the end of the array
console.log(array); // Output: [10, 2, 3, 4, 5, 6]
// Removing elements
array.pop(); // Removes the last element (6)
console.log(array); // Output: [10, 2, 3, 4, 5]


// Array length
console.log(array.length); // Output: 5
// Checking if an element exists
console.log(array.includes(3)); // Output: true

// slice and splice
const slicedArray = array.slice(1, 3); // Extracts elements from index
console.log(slicedArray); // Output: [2, 3]
array.splice(1, 2); // Removes 2 elements starting from index 1
console.log(array); // Output: [10, 4, 5]