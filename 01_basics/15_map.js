const map = new Map();
// Adding key-value pairs to the map
map.set('name', 'jone');
map.set('age', 30);
map.set('city', 'Narayanganj');
map.set('name', 'Siam'); // This will overwrite the previous value for 'name'

console.log(map);

// Accessing values using keys
console.log(map.get('name')); // Output: Siam

// Checking if a key exists
console.log(map.has('age')); // Output: true
