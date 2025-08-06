class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(val){
        this._password = val;
    }

}

const userInfo = new user("siam@gmail.com", "abcde") 
console.log(userInfo.password)