const myArr = [0, 1, 2,3,4,5]
const myHeros = ["shaktiman" , "naagraj"]
console.log(myArr[0]);


// arrays methods

myArr.push(6) // last me value add kar denge
console.log(myArr);

myArr.pop() // last ka value remove kar denge
console.log(myArr);

myArr.unshift(0);
myArr.shift();

console.log(typeof null);

const newArr = myArr.join();

console.log("A  " , myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn1);
console.log(myn2);

const marvel_hero = ["thor", "ironman", "spiderman"];
const dc_hero = ["superman", "flash", "batman"];

marvel_hero.push(dc_hero)
console.log(marvel_hero);

const allHeros = marvel_hero.concat(dc_hero);
console.log(allHeros);


const all_new_arr = [...marvel_hero, ...dc_hero];
console.log(all_new_arr);

const Arrays = [1,2,3,[4,5,6],[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// data scraping

console.log(Array.isArray("Arpita"))
console.log(Array.from("Arpita"))

console.log(Array.from({name: "arpita"}));  //interesting


let score1 = 300
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));