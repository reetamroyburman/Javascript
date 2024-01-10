class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    changeUserName(newUserName){
        return this.username = newUserName  //return new user name
    }
}

let user_1 = new User("reetam","reetam@email.com","passwordDemo")

// console.log(user_1);
// let newUser_Name = user_1.changeUserName("Roy")
// console.log(newUser_Name);
// console.log(user_1);