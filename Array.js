// //  for 

// ["", "" ,""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
     console.log(num);
}

const greetings = "hello world"
for(const greet of greetings){
    console.log(`each char is ${greet} `);
}

// // maps
// // map is an object that holds key: value pair and remebers the original insertion order of the keys : no duplicate value only unique


const map = new Map()
map.set('IN' , "india")
map.set('fr', 'France')
map.set('usa', "united states of america")

console.log(map);

for(const key of map){
    console.log(key);
}


// // // de-structure

for(const [key, value] of map){
    console.log(key, ":-" , value);
}

const myObject = {
    'game1' : 'nfs',
    'game2' : 'spiderman'
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// this will print keys of the arrays

const programming = ['js', 'ruby', 'java', 'cpp']
for(const key in programming){
    console.log(key);
}

// // arrays me by default key is number and starting from 0 but in objects we can give key by our own 


// // this will print values of the arrays
const programming1= ['js', 'ruby', 'java', 'cpp']
for(const key in programming){
    console.log(programming[key]);
}


// for each loop

const coding = ["js", "ruby", "java", "cpp", "python"]

coding.forEach(function (item) {
    console.log(item);
})

coding.forEach((item) => {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
            languageFileName: "js"
    },
    {
        languageName: "java",
            languageFileName: "java"
    },
    {
        languageName: "python",
            languageFileName: "py"
    }
]
   

myCoding.forEach ( (item) => {
    console.log(item.languageName);
})

myCoding.forEach ( (item) => {
    console.log(item.languageFileName);
})

// return unique elements in an array
// encode and  decode a string

// forEach value return nahi karta hai

const value = coding.forEach( (item) => {
    return item
})


// forEach value return karta hai

const myNumsONE= [1,2,3,4,5,6,7,8,9,10]

const newNumsONE = myNums.filter( (num) => num > 4)
console.log(newNums);

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNumsONE);


const books = [
    {
        title: "one", genre: "friction"
    },
    {
        title:"two", genre: "non-friction"
    },
    {
        title:"three", genre: "history" 
    }
];

const userBooks = books.filter( (bk) => bk.genre === 'history')

const userBooks1 = books.filter((bk) => {return bk.publish >= 2000})
console.log(userBooks);


const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// without scope
const number = myNumbers.map( (num ) => num + 10)
console.log(number);

// withscope

const numberOne = myNumbers.map( (num ) => {return num + 10})
console.log(numberOne);



// chaining

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = newNums
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)

                    console.log(newNumbers); 

                    
// reduce

const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce(function (accumlator, currval){
    return accumlator + currval
}, 0)


const myTotalOne = myNums.reduce( (accumlator, currval) =>  accumlator + currval, 0)
console.log(myTotalOne);

const shoppingMall = [
    {
        itemName: "js course",
        price: 1299
    },
    {
        itemName: "java course",
        price: 1299
    },
    {
        itemName: "python course",
        price: 1299
    },
    {
        itemName: "react course",
        price: 1299
    }

]

const priceCart = shoppingMall.reduce( (acc, item) => acc + item.price, 0)
console.log(priceCart);