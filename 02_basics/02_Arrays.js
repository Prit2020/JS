const marvelHeros = ["ironman", "thor", "hulk"]
const dcHeros = ["superman", "batman", "flash"]

// push method
// marvelHeros.push(dcHeros) // when we use this method to combine 2 arrays into one single array then it will add complete 2nd array to the first array & will act as a element of it do not use this mehod 
// console.log(marvelHeros);

// concate method
// const allHeros = marvelHeros.concat(dcHeros) // in this there is limitation wherein we can only give one array and not more than that, this method is not used often  
// console.log(allHeros);

// spread method => use this instead
// const allNewHeros = [...marvelHeros, ...dcHeros] // this will combine 2 or more arrays into a single array
// console.log(allNewHeros);

// const anotherArray = [1, 2, 3, 4, [5, 6, 7], 8, 9, [5, [6, 7, 8]]] // to convert this into a single array we use falt method
// const someArray = anotherArray.flat(Infinity) // in this we have to pass a number till what depth it will go
// console.log(someArray);

// console.log(Array.isArray("prit")) // this method is used to check wheather the given value is present in the array or not. It is used when we have data in a huge amount and before executing the operation we can check by using these method. It return OP in boolean format.

// console.log(Array.from("prit")) // this will convert any values into a array
// console.log(Array.from({name: "prit"})) // this will return an empty array & this is very interesting

let prit = 100
let raj = 200
let preetham = 300

console.log(Array.of(prit, raj, preetham)); // it will return a new array from set of elements & it could be anything, it can be variables also.

