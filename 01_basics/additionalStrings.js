// 01. at(index)
const sentence = "Hello everyone myself Prit"
// let index = 9
// console.log(`An index of ${index} will return ${sentence.at(index)}`);

// index = -6
// console.log(`An index of ${index} will return ${sentence.at(index)}`);
/*
The index (position) of the string character to be returned. Supports relative indexing from the end of the string when passed a negative index; i.e. if a negative number is used, the character returned will be found by counting back from the end of the string.
*/

// 02. charAt(index)
// let index = 4
// console.log(`An index of ${index} will return ${sentence.charAt(index)}`);

// this returns character at given index 


// 03. concat
let str1 = "hello"
let str2 = "world"

// console.log(`This is an example of string concat ${str1} ${str2}`);

// this is used to add multiple strings together


// 04. endsWith(searchingstring), endsWith(searchingstring, endposition)
const name = "hello foks welcome to world of technology!"
// console.log(name.endsWith('technology!'));  // it will return true
// console.log(name.endsWith('technology'));  // it will return false
// console.log(name.endsWith('technology!', 10));  // it will return false
// console.log(name.endsWith('technology!', 50));  // it will return true
/* 
it check whether the end string mathces with the given string in the brackets() or not. if it matches then it will return true or lese it will return false, same thing goes with the end position 
*/

// 05. includes(searching string) 
const newString = "hello and welcome to web dev course"

// console.log(newString.includes('and')); // it will return true
// console.log(newString.includes('And')); // it will return false coz it is in lowercase
// console.log(newString.includes('AI')); // it will return false coz this word do not exist in the given variable

// includes(searching string) it is used to check whether the given string is present or not in the given variable

// 06. 
