function setUsername(username){
    this.username = username
}

function userInfo(username, password, email){

        setUsername.call(this, username)

    this.password = password
    this.email = email

}

const userOne = new userInfo('siam', '1234', 'something@something.com')

console.log(userOne)