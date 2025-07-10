// immedeiately invoked function expression (IIFE)
(function() {
    //namee iife
    let message = "Hello, World!"; 
    console.log(message); 
})(); // This function is executed immediately after its definition

((message)=>{
    //arrow function iife
    console.log(`Hello, Arrow World! ${message}`);
})('Siam'); // This arrow function is executed immediately after its definition