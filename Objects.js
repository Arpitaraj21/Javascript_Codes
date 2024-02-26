//  singleton

// object literals
const mySymbol = Symbol("key1")



const JsUser = {
    name: "arpita" ,// (key: value),
    age: 22,
    [mySymbol] : "myKey1",
    location: "jamshedpur",
    email: "arpita@gmail.com"
}   //object

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySymbol]);

JsUser.email = "swati@gmail.com";

// to freeze an object so that nobody can chnage it

// Object.freeze(JsUser)


JsUser.greeting = function(){
    console.log("hello world");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greetingTwo());






// object singleton

const tinderUser = new Object()

const tinderUser1 = {}
tinderUser1.id = "12345abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);



const regularUser = {
    email: "some@gmail.com",
}