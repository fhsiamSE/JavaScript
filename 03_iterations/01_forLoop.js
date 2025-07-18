// //for

for(let i = 0; i < 5; i++) {
    // console.log(i);
}


// for with condition
for(let i = 0; i < 5; i++) {
    if(i === 2) {
        // console.log("Skipping 2");
        continue; // Skip the rest of the loop for this iteration
    }
    // console.log(i);
}

// for with break
for(let i = 0; i < 5; i++) {
    if(i === 3) {
        // console.log("Breaking at 3");
        break; // Exit the loop when i is 3
    }
    // console.log(i);
}

// for with nested loops
for(let i = 1; i < 5; i++) {
    for(let j = 1; j < 5; j++) {
        // console.log(`i: ${i}, j: ${j}`);
    }
}

// for with array
const fruits = ['apple', 'banana', 'cherry'];
for(let i = 0; i < fruits.length; i++) { //fruits.length gives the number of elements in the array
    console.log(fruits[i]); //fruits[i] accesses each element in the array
}
