// 1. Implement your own version of map().

// below creating a function which will act like a map() method. Below we define the fun and than we use that function
// below func takes 2 things (array and callback) func
function myMapFunction(arr, callback) {
    const result = []                             // define an empty array here to store the final result, coz map() returns new array
    for (let i = 0; i < arr.length; i++) {        // iterating an array here
        result.push(callback(arr[i], i, arr))      // here we access current element, current index, original array
    }
    return result
}

// below we use the above created custom map() method/func
const arrayOne = [1, 2, 3, 4, 5]
const newArray = myMapFunction(arrayOne, num => num * num)    // here we invoke myMapFunction and pass (arrayOne, and callback). This is callback func num => num * num
// console.log(newArray);




// 2. Implement your own version of filter().

// below is the function which acts as a filter() method
function myFilter(arr, callback) {
    const result = []  // empty array coz filter() method returns an new array
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {        // here if condition will check if the result or value is or not truthy than it will be pushed to new array 
            result.push(arr[i])
        }
    }
    return result
}


// below is the usage of the myFilter func
const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newArrayTwo = myFilter(arrayTwo, num => num % 2 === 0)
const newArrayTwo = myFilter(arrayTwo, num => num > 5)


// console.log(newArrayTwo);



// 3. Implement your own version of reduce().

// below is the function which acts like a reduce() method
function myReduce(arr, callback, initialValue) {
    let accumulator
    let startIndex

    // below given if condition checks if initialValue is there or not coz it is optional
    if(initialValue !== undefined) {
        accumulator = initialValue
        startIndex = 0
    } else {
        accumulator = arr[0]
        startIndex = 1
    }

    for(let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr)
    }

    return accumulator

}


// below is the usage of the reduce() method
const arrayThree = [1, 2, 3, 4]
const sumArray = myReduce(arrayThree, (acc, curr) => acc + curr, 0)    // here initial value is 0
// const sumArray = myReduce(arrayThree, (acc, curr) => acc + curr)    // there is no initial value over here
// console.log(sumArray);



// 4. Convert an array of numbers to their squares.
const arrayFour = [1, 2, 3, 4, 5, 6, 7, 8]
function squaredArray(arr) {
    const squareArray = []
    for(let i = 0; i < arr.length; i++) {
        squareArray.push(arr[i] * arr[i])
    }

    return squareArray
}

// console.log(squaredArray(arrayFour));



// 5. Filter out falsy values from an array.
const arrayFive = [1, 2, 3, NaN, 4, 5, 0, 8, 2, 9, "", " "]      // empty "" is false but " " with a space is true

function filterArray(arr) {
    const newArray = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            newArray.push(arr[i])
        }
    }

    return newArray
}


// console.log(filterArray(arrayFive));




// 6. Find the total price from a cart array of objects.
const cart = [
    {id: 1, price: 1000},
    {id: 2, price: 3000},
    {id: 3, price: 50000}
]

function totalPrice(arr) {
    let total = 0
    for(let i = 0; i < arr.length; i++) [
        total += arr[i].price
    ]
    return total
}

console.log(totalPrice(cart));
