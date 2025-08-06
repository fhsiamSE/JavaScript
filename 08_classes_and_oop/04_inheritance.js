class user{
    constructor(username)
    {
        this.username = username
    }
}

class Teacher extends user{
    constructor(username, email, password)
    {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse()
    {
        console.log('course added')
    
    }

}

const instructor = new Teacher('siam', 'something@something.com', '123')
console.log(instructor)
instructor.addCourse()