let number = 10; // Global scope variable

if (true) {
    let number = 20; // Block scope variable, this will not affect the global variable
    console.log("Inside block scope:", number); // Output: Inside block scope: 20
}

console.log("Outside block scope:", number); // Output: Outside block scope: 10 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one() {
        const a = 10; // Local scope variable but global for function two

        function two(){
            const b=20;
            console.log(a);
        }
        // This will throw an error because b is not defined in this scope
        //console.log(b); 
        two(); // Calling the inner function
}

one(); // Calling the outer function