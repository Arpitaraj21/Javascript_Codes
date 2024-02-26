// // let a = 10;
// // const b = 20;
// // var c = 30;

// // console.log(a);
// // console.log(b);
// // console.log(c);


// {}     // scope

// // {within bracket it is a block scope and after it is a global scope}
// if(true){ 
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// // dom - kaise html ke webpage ko manipulate kiya jata hai javascript ke through


// // nested scope

// function one(){
//     const username = "arpita"

//     function two(){
//         const website = " youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two();
// }

// // one()

// if(true){
//     const username = "swati"
//     if(username === "swati"){
//         const website = " youtube"
//         console.log(username +  website);
//     }
//     // console.log(website);
// }



// ******************  *******************

function addone(num){
    return num + 1
}

addone(6)




const addTwo = function(num){
    return num + 2
}

addTwo(2)

const addThree = (num) => {
    return num;
}

// this - current object ko refer karne ke liye

const user = {
    username: "arpita",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}

user.welcomeMessage()

user.username = "swati"
user.welcomeMessage()


// arrow function

// explicitely
const addNum = (num1 , num2) => {
    return num1 + num2
}
console.log(addNum(2, 4));


// implicite return

const addNumOne = (num1, num2) =>  num1+ num2
console.log(addNumOne(3, 4));


const sum = (num1, num2) => ({username: "arpita"})


// immediately invoked function expressions (IIFE)

function chai(){
    console.log(`DB CONNECTED`);
}
chai()

// there is a problem due to pollution of gloabal scope.
// many a times, we have thrown it to remove the pollution of the variables of global scope and whatever declaration is there