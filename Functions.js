function myName(){
    console.log("arpita");
}

myName();
// myName is the reference variable and () is the excution

function addTwoNumber(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumber(2, 5);
console.log("result : " , result);


function loginUserMessage(userName){
    return `${userName} just logged in `
}

console.log(loginUserMessage("arpita"));



// rest operator
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 3000))

const user = {
    username: "arpita",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myNewArray = [200, 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[0]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(myNewArray));