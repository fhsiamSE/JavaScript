//promise 1

const promise = new Promise((resolve, reject)=>{
    //do an async task
    setTimeout(()=>{
        console.log("Async task done");
        resolve(); // connecting to the promise
    },1000)
})

promise.then(()=>{
    console.log("Promise consumed"); //resolve the promise
})

//promise 2

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Task done");
        resolve();
    },1000)
}).then(()=>{
    console.log("promise consumed");
})


//prmise 3

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task done");
        resolve({user:"Siam", age: 20}); // resolve with an object
    },1000)
})

promise3.then((data)=>{
    console.log("Promise consumed with data:", data); // resolve the promise with data
})


//promise 4

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({userName: "siam", pass: "1234"})
        }else{
            reject("Error")
        }
    },1000)
})

promise4.then((user)=>{         // consuming the promise
        console.log(user)
        return user.userName
}).then((userName)=>{           // chaining the promise
    console.log(userName);
}).catch((error)=>{             // handling the error
    console.log("error")
}).finally(()=>{                // finally block will always execute
    console.log("Finally block executed");
}) 


//promise 5

const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({userName: "siam", pass: "1234"})
        }else{
            reject("Error")
        }
    },1000)
})

async function consumePromise5() {
    try {
         const response = await promise5
    console.log(response);
    } catch (error) {
        console.log(error);
    }   
}
consumePromise5()

