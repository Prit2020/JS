/*  
Primitive dataType (Call by value; whenever we call them we get their copied version & changes are made to the copies)

7 types:

string
number
boolean
null
undefined
symbol
bigInt
*/

/* 
Reference or non-primitive datatype (reference of their memory is allocated)

array
objects
functions
*/

// some eg. of non primitive type

// const heros = ["ironman", "hulk", "spiderman"]

// let Obj = 
// {
//     name: "prit",
//     age: 20,
// }

// const myFunction = function() 
// {
//    console.log("Hello World"); 
// }

// console.log(typeof heros);



// ++++++++++++++++++++

/*
there are 2 types of memory
Stack => it is used in primitive data types
Heap => it is used in non-primitive data types

In stack memory we always get a copy of variable which we have created & changes are made in that copied variable 

In heap memory we get the reference of a object, function,. It means changes which we are making are made in the original object, function

*/

// Eg of stack memory
// let myYoutubeName = "pritudotcom"
// let anotherName = myYoutubeName
// anotherName = "pritchudasama"

// console.log(myYoutubeName);
// console.log(anotherName);

// Eg of heap memory
let userOne = {
    emial: "user@google.com",
    upi: "user@okb"
}

let userTwo = userOne

userTwo.emial = "prit@google.com"

console.log(userOne.emial);
console.log(userTwo.emial);