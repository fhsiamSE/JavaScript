// have to undrstand the concept of 'this' in JavaScript beefore using arrow functions.
// Arrow functions do not have their own 'this' context, they inherit 'this' from
// 'this' refers to the current object in which the function is defined.
const user = {
    name: 'Siam',  
    age: 30,

    welcomee: function() {
        console.log (`Welcome ${this.name}!`); // Using 'this' to refer to the current object
    }   
}

user.welcomee();
user.name = 'Faisal'; // Changing the name property of the user object
user.welcomee(); // Output: Welcome Faisal!

//this cant access uender an function
function welcomeUser() {
    console.log(`Welcome ${this.name}!`); // 'this' will not refer to the user object here
}

welcomeUser(); // Output: Welcome undefined!

// Using an arrow function
const welcomeUserArrow = () => {
    console.log(`Welcome ${this.name}!`); // 'this' will refer to the global object or undefined in strict mode
}
welcomeUserArrow(); // Output: Welcome undefined!

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Arrow function () => {}

const addTwoNumbers = (number1, number2) => {
    return number1 + number2; // This function returns the sum of number1 and number2
}

//another ways to write the same function (return is implicit in these cases)
const addTwoNumbers2 = (number1, number2) => number1 + number2
const addTwoNumbers3 = (number1, number2) => (number1 + number2)
const addTwoNumbers4 = (number1, number2) => ({obj: "siam"}) // This will return an object with a property 'obj' set to "siam"

// const result = addTwoNumbers(5, 10); // Here, 5 and 10 are arguments passed to the function
// console.log("Addition result:", result); // Output: Addition result: 15
// const result2 = addTwoNumbers2(5, 10);
// console.log("Addition result 2:", result2); // Output: Addition result 2: 15
// const result3 = addTwoNumbers3(5, 10);
// console.log("Addition result 3:", result3); // Output: Addition result 3: 15
// const result4 = addTwoNumbers4(5, 10);
// console.log("Addition result 4:", result4); // Output: Addition result 4: { obj: 'siam' }


