// Case - 1
// let score = 33
// console.log(typeof score);
// console.log(score);

// Case - 2
// let score = "33"
// console.log(typeof score);
// console.log(score);

// let valueInNumber = Number(score)  // it is used to convert string into number but intial letter should be capital
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// Case - 3
// let score = "33abc"
// console.log(typeof score);
// console.log(score);

// let valueInNumber = Number(score)  // it is used to convert string into number but intial letter should be capital
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  // it will return NaN (Not a number) it is an object

// Case - 4
// let score = null
// console.log(typeof score);  // this will return object as output
// console.log(score);

// let valueInNumber = Number(score)  // it is used to convert string into number but intial letter should be capital
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  // it will return '0' as an O/P

// Case - 5
// let score = undefined
// console.log(typeof score);
// console.log(score);

// let valueInNumber = Number(score)  // it is used to convert string into number but intial letter should be capital
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  // it will return NaN

// Case - 6
// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)  // it will convert it into boolean
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// Case - 7
// let isLoggedIn = 0

// let booleanIsLoggedIn = Boolean(isLoggedIn)  // it will convert it into boolean
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// Case - 8
// let isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn)  // it will convert it into boolean
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);  // empty string will return false as output

// Case - 9 
// let isLoggedIn = "prit"

// let booleanIsLoggedIn = Boolean(isLoggedIn)  // it will convert it into boolean
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);  // this will return true coz it is not an empty string

// Case - 10
// let someNumber = 33

// let stringNumber = String(someNumber)  // it will convert number into string
// console.log(typeof stringNumber);
// console.log(stringNumber);

/*

Conversion 
1 => true; 0 => false
"prit" (string with values) => true
"" (for empty string) => false
*/


// ************* Operations ********************

// let value = 3
// let negativeValue = -value
// console.log(negativeValue);



// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  // this is 2^3 (8)
// console.log(2/3);
// console.log(2%5);

// let str1 = "hello"
// let str2 = " prit"
// let str3 = str1 + str2
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");


console.log("1" + 2 + 2);
console.log(1 + 2 + "2");