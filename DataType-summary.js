// primitive
// 7 types : String, Number, Boolean , null , undefined, Symbol, BigInt


// Q. javascript is dynamically typed langauge or 
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

const bigNumber = 23475892123456789013n



// reference type (Non prmitive)
// Array, Objects, Functions

const arrays = ["shaktiman", "naagraj", "doga"]


let myObject = {
    name: "arpita",
    age: 22,
    love: "mummy"
}

const myFunction = function(){
    console.log("hello world");
}

/*
data types: typeof
Undefined: undefined
Null : object
Boolean: boolean
Number: number
String: string
Object: object
Function: object function
*/

/*
Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/