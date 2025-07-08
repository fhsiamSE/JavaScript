const user = {
    name: 'siam', 
    age: 30,
    location: 'Dhaka',
    email: 'faisalhossainsiam@gmail.com'
}
// changing the properties of the object
user.location = 'Dhaka, Bangladesh';
Object.freeze(user); // This will make the object immutable, preventing any changes to its properties
user.email = 'something@gmail.com';

// accessing the object
console.log(user); 
// accessing the object elements
console.log(user.name); // Output: siam

// another way to access the object elements
console.log(user['name']); // Output: siam