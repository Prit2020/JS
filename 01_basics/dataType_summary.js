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

const heros = ["ironman", "hulk", "spiderman"]

let Obj = 
{
    name: "prit",
    age: 20,
}

const myFunction = function() 
{
   console.log("Hello World"); 
}

console.log(typeof heros);