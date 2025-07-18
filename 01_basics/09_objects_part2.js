//nasted objects
const user = {
    email: 'something@gmail.com',
    age: 30,
    location: 'Dhaka, Bangladesh',
    name: {
        userName: {
            firstName: 'Siam',
            lastName: 'Faisal'
        },
        fatherName:{
            firstName: 'Mosharraf',
            lastName: 'Hossain'
        },
        motherName:{
            firstName: 'Farida',
            lastName: 'Hossain'
        }
    }
}

console.log(user.name.motherName.firstName); 

// marging objects
const object1 = { 1: 'one', 2: 'two' };
const object2 = { 3: 'three', 4: 'four' };
const object3 = { 5: 'five', 6: 'six' };

// Using Object.assign() to merge objects
// This method copies the values of all enumerable own properties from one or more source objects to a target object
const boject4 = Object.assign({}, object1, object2, object3); // {} is targeted object
console.log(boject4); 

// Using spread operator to merge objects
// This is a more modern and concise way to merge objects
const object5 = { ...object3, ...object2, ...object1 };
console.log(object5);

//see objects key and values
console.log(Object.keys(object1)); // Output: [ '1', '2' ]
console.log(Object.values(object1));  // Output: [ 'one', 'two' ]


