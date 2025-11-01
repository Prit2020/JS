const newArry = [0, 1, 3, 4, 5]
const superHerose = ["Ionman", "Hulk"]
const newArray2 = new Array(1, 2, 3, 4, 5)

// console.log(newArry[3]);  // to access any element by giving an index value
// console.log(superHerose);
// console.log(newArray2);

// array methods 

const myArr = [1, 2, 3, 4, 5, 6]

// myArr.push(6) // we have to pass argument in this and it will add the element at the end of array or after last element & also it will change the original array

// myArr.pop()  // no argument required here & it will remove the last element from the array

// myArr.unshift(7) // it will add the element at start of the array & here argument is required

// myArr.shift() // no argument require here it will just remove the starting element from the array
// myArr.shift()

// console.log(myArr.includes(4)); // this method is used for asking ques wheather the foll element is present in the array or not & it will return O/P in boolean format

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(4));  // it used to find the index of the given element in an array

// console.log(myArr.indexOf(9));

// const myArray = myArr.join() // this method will convert the array into the string 
// console.log(myArray);
// console.log(typeof myArray);


// slice & splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3) // slice will include elements at index 1 & 2 & it will not manipulate the original array 
console.log(myn1);
console.log("B ", myArr);

console.log("C ", myArr);
const myn2 = myArr.splice(1, 3) // it will include elements which has indexing from 1 to 3 but it also manipulate the original array. It will remove this elements from the array
console.log(myn2);
console.log("D ", myArr);



