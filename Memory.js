// ***************************************

// stack (Primitive) , Heap(Non-Primitive)

// stack memory : when we declare the variable, we get a copy of it 
// heap memory : when we declare any object inside a memory heap goes inside the hit, then from there we get the reference of the original value, so whatever we will chnge, it will be in the original value



let myName = "swati"

let anotherName = myName
anotherName = "arpita"
console.log(myName);
console.log(anotherName);