//assume we are geting multiple values an user

function priceList(...totalPrice){
    return totalPrice
}

const totalPrice = priceList(100, 200, 300, 400, 500);
console.log(totalPrice); // Output: [ 100, 200, 300, 400, 500 ]


//object destructuring
const user = {
    name: 'Siam',   
    age: 30,
}

function userInfo(obj) {
    return `User Name: ${obj.name}, Age: ${obj.age}`; // Returning a string with the user's name and age
}   

const userDetails = userInfo(user); // Calling the function with the user object
console.log(userDetails); // Output: User Name: Siam, Age: 30


//array destructuring
const numbers = [1, 2, 3, 4, 5];

function returnValues(array){
    return numbers[1];
}

const secondValue = returnValues(numbers); // Calling the function with the numbers array
console.log(secondValue); // Output: 2