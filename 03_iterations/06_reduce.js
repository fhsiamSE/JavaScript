//reduce

const numbers = [1, 2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
    // accumulator is the accumulated value, currentValue is the current element being processed
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    // This will log the accumulator and current value at each step
  return accumulator + currentValue; // This will sum up all the numbers in the array
}, 0); // 0 is the initial value for the accumulator

console.log(`Sum: ${sum}`); // This will log the final sum of the numbers in the array