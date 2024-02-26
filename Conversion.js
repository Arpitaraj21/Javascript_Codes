let score = "33abc"

console.log(typeof score);
console.log(typeof(score)); //as method

let valueInNumber = Number(score) //isse score agar string me double qoutes me aaye bhi as number convert ho jyega
console.log(typeof valueInNumber);


// NaN (not a number)
// jb 33abc hoga tab humlog change karenge number me toh nahi hoga aur NaN result dega
// true number me change hoga toh 1 dega and false 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



// ************************** Operations ************************

let value = 3
let negativeValue = - value
console.log(negativeValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); (power)
// console.log(2/2);
// console.log(2%3);


let str1 = 'hello'
let str2 = 'world'
let str3 =  str1 + str2

console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1+ 2 + "2");

console.log( ( 3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");


let num1, num2 , num3

num1 = num2 = num3 = 2+3

// prefix => pehle increment hoti hai
// postfix => operation ke baad increment hoti hai


// *********** Comparison of different data types

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// strict checking () , 
// === (check with)
// along with values there data type is also considered

console.log("1" === 1);