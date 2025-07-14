//filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Using filter to get even numbers
const evenNumbre = numbers.filter(num => num % 2 === 0); // This will return an array of even numbers
console.log(evenNumbre); 

// Using filter to get odd numbers
const oddNumbers = numbers.filter((num)=>{
    return num % 2 !== 0; // This will return an array of odd numbers
})
console.log(oddNumbers);