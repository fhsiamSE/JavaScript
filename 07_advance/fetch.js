async function getUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
getUsers();

//using then chaining

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
        return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})