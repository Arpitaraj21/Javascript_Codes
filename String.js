const name = "arpita"
const repoCOunt = 6

// console.log(name + repoCOunt + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCOunt}`);

const gameName = new String("swati");
// accessing key value pair 

console.log(gameName[0]);
console.log(gameName. __proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1)); // yaha check kar rahe hai ki kis index pe kon sa element presnt hai
console.log(gameName.indexOf('t')); // yaha pe check kar rahe hai ki yeh element kis index pe available hai

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(0, 3); //isme negative value bhi dete hai aur negative me piche se count hota hai
console.log(anotherString);

const newStringOne = "         swati            "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arpita.com/arpita%20raj"
console.log(url.replace('%20', '-'));

console.log(url.includes('swati'));




