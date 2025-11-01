const name = "prit"  // this is 1st method of declaring a string
const repoCount = 50

// console.log(name + repoCount + " Value"); => this is old method of concatinating a string

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is new way of concatinating a string it is called as string interpolation

const gameName = new String('prit-zzz-chudasama')  // this is 2nd method of declaring string

// console.log(gameName[6]);  // to access value at given key pair

// console.log(gameName.__proto__);  // this will return an empty object

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt('5'));  // it is used to find which character is present at the given index
// console.log(gameName.indexOf('i'));  // to find the index of given character

// const newString = gameName.substring(0, 4)  // for sub-string we have to give the starting & end index
// console.log(newString);

// const anotherString = gameName.slice(-9, 5) // in slice we can also give -ve values
// console.log(anotherString);

// const stringOne = "        pritzzz   "
// console.log(stringOne);
// console.log(stringOne.trim());

const url = "https://prit.com/prit%20chudasama"
console.log(url);
console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));