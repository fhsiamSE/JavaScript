class User {
    constructor(username, email, password)
    {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword()
    {
        return `${this.password}abc`
    }
}

const userInfo = new User ('siam', 'something@something.com', '123')
console.log(userInfo.encryptPassword())


//without class

function userFromPrototype(username, email, password)
{
    this.username = username
    this.email = email
    this.password = password
}

userFromPrototype.prototype.encryptPassword = function()
{
    return `${this.password}abc`
}

const userInfoFromPrototype = new User ('siam', 'something@something.com', '123')
console.log(userInfoFromPrototype.encryptPassword())