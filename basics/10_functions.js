function addTwoNumbers(number1, number2) { // number1 and number2 this are called parameters 
    console.log("Adding two numbers:", number1 + number2);
}

addTwoNumbers(5, 10);  // This is a function call, 5 and 10 are called arguments



//returning value from function (two ways to do this)
//first way
function multiplyTwoNumbers(number1, number2) {
    return number1 * number2; // This function returns the product of number1 and number2
}

const result = multiplyTwoNumbers(5, 10); // Here, 5 and 10 are arguments passed to the function
console.log("Multiplication result:", result); // Output: Multiplication result: 50

//2nd way
function subTowNumbers(number1, number2){
    let result = number1 - number2
    return result
}

const result2 = subTowNumbers(10, 2)
console.log("Subtraction result:", result2) 

//------------------------------------------------------------------------------------------------


function loginUserMessage(user){
    if (!user) { // Check if the user parameter is not provided
        return "Please provide a user name";
    }
    return `Welcome ${user}!`;
}

console.log(loginUserMessage("Siam")); // Output: Welcome Siam!
console.log(loginUserMessage()); // Output: Please provide a user name