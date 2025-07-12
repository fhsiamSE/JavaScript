//foreach loop
const codeing =['JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Swift', 'Go'];

codeing.forEach(function(language) {
    console.log(language);
});

//arrow function
codeing.forEach((language) => {
    console.log(language);
});

//item, index and array
codeing.forEach((item, index, array) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
});

//foreach with object
const person = [{
    name: 'Siam',
    age: 30,
    city: 'Narayanganj'
},
{
    name: 'John',
    age: 25,
    city: 'Dhaka'
},
{
    name: 'Jane',
    age: 28,
    city: 'Chittagong'
}];


person.forEach((item) => {
    console.log(`Name: ${item.name}, Age: ${item.age}, City: ${item.city}`);
});