// 1. Print all elements of an array.

// const array = [1, 2, 3, 4, 5]
function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// console.log(printArr(array));


// 2. Find the length of an array without using .length.

// const array = [1, 2, 3, 4, 5]
let count = 0;
// for (const element of array) {
//     count++
// }

// console.log(count);


// 3. Access the first, middle, and last element of an array.
const array = [1, 2, 3]

let firstElement = array[0];
// let middleElement = array[array.length / 2]
let middleElement = array[Math.floor(array.length / 2)];
let lastElement = array[array.length - 1]


// console.log(firstElement);
// console.log(middleElement);
// console.log(lastElement)


// 4. Reverse an array without using .reverse().
// const fourthArr = [1, 2, 3, 4, 5, 6]
function reverseArr(arr) {
    let reverse = []
    for(let i = arr.length - 1; i >= 0; i--) {
       reverse.push(arr[i])
    }
    return reverse
}

// console.log(reverseArr(fourthArr))




// 5. Find the sum of all elements in an array.
// const newArray = [1, 2, 3, 4, 5, 67]

function additionOfArr(arr) {
    let addition = 0;
    for (let i = 0; i < arr.length; i++) {
        addition += arr[i]
    }
    return addition
}

// console.log(additionOfArr(newArray));



// 6. Find the maximum and minimum element in an array.
function findNum(arr) {
    let minimum = arr[0]
    let maximum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < minimum) {
            minimum = arr[i]
        }
        if(arr[i] > maximum) {
            maximum = arr[i]
        }
    }
    return {minimum, maximum}
}

// console.log(findNum([11, 12, 13, 4, 156, 6,5, 123]));


// const arr = [1, 2, 3, 4, 56, 6,5, 123]
// let min = Math.min(...arr)
// let max = Math.max(...arr)

// console.log(min);
// console.log(max);


// 7. Count how many even and odd numbers are in an array.
function countEvenAndOddNums(arr) {
    let evenCount = 0
    let oddCount = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenCount++
        } else {
            oddCount++
        }
    }
    return { evenCount, oddCount }
}

// console.log(countEvenAndOddNums([0, 1, 2, -3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));



// 8. Check if a value exists in an array.
// const newArray = [1, 2, 3, 4, 5, 6]
function findValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return true
        }
    }
    return false
}

// console.log(findValue(array, 2))


// 9. Copy one array into another without using spread or slice.
// const newArray = [1, 2, 3, 4, 5, 6]
function copyArray(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

// console.log(copyArray(newArray));


// 10. Swap the first and last elements of an array.
const lastArray = [3, 2, 3, 4, 5, 6, 23, 45, 56]

function swapNums(arr) {
    if(arr.length < 2) return arr
    
    let temp = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = temp
    
    return arr
}

console.log(swapNums(lastArray))