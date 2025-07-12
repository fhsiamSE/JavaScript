//for of

const array = [1, 2, 3, 4, 5];
// Using for...of loop to iterate over the array
for (const num of array) { //num will take the value of each element in the array
     console.log(num); // This will log each number in the array
}

//iteration of map
const map = new Map();
// Adding key-value pairs to the map
map.set('name', 'Siam');
map.set('age', 30);
map.set('city', 'Narayanganj');

for (const [key, value] of map) { //key and value will take the key-value pairs from the map
     console.log(`${key}: ${value}`); // This will log each key-value pair in the map
}


//forin loop

//iteration of object
const obj = {
    name: 'Siam',
    age: 30,
    city: 'Narayanganj'
};

for (const key in obj) { //key will take the keys from the object
        console.log(`${key}: ${obj[key]}`); // This will log each key-value pair in the object
}