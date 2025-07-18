const name = "Siam";
const age = 30;

// String old methods
const greeting = "Hello, my name is " + name + "! I am " + age + " years old.";

// String methods (ES6)
const greeting2 = `Hello, my name is ${name}! I am ${age} years old.`;
console.log(greeting2);

// String object
const personName = new String("Siam");

console.log(personName.length);
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName.charAt(0)); // get the character at index 0
console.log(personName.indexOf("a"));
console.log(personName.lastIndexOf("a")); // find the last index of "a"
console.log(personName.slice(0, 4)); // extract a part of the string
console.log(personName.includes("Siam")); // check if the string contains "Siam"
console.log(personName.startsWith("S")); // check if the string starts with "S"


const url = "http://www.example.com/path?query=123#fragment";
console.log(url.replace("http", "https")); // replace "https" with "http"
console.log(url.split("/")); // split the string by "/"
