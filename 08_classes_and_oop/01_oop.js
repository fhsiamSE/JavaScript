//object literal
// This code demonstrates the use of object literals and constructor functions in JavaScript.
const user = {
    username: 'john_doe',
    logincount: 5,
    isLoggedIn: true,
    userDetails ()  {
        console.log(`Username: ${this.username}, Login Count: ${this.logincount}`);
    }
}

console.log(user.username); // Accessing property using dot notation
user.userDetails(); // Calling method using dot notation

//constructor function
function User(username, logincount, isLoggedIn) {
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;
    return this; // Not necessary, but can be used to return the object
}

// const userOne = User('jane_doe', 3, false);
// const userTwo = User('john_smith', 2, true); 
// console.log(userOne);              // userTwo will rewrite userOne thats the output will be userTwo

//to avoid this, we can use the 'new' keyword

const userOne = new User('jane_doe', 3, false);
const userTwo = new User('john_smith', 2, true);
console.log(userOne); // { username: 'jane_doe', logincount: 3, isLoggedIn: false }