// 1. Remove duplicates from an array.
// const oneArray = [1, 2, 3, 4, 5, 4, 6, 1, 2, 7, 34, 56]
function removeDuplicate(arr) {
    let newArray = []
    for(let i = 0; i < arr.length; i++) {
        if(newArray.includes(arr[i])) continue
        newArray.push(arr[i])
    }    
    return newArray
}

// console.log(removeDuplicate(oneArray));


// 2. Find the second largest element in an array.
// const twoArray = [1, 2, 3, 4, 5, 4, 6, 1, 2, 7, 34, 56]

function findSecondLargestNum(arr) {
    let firstLargeElement = -Infinity
    let secondLargeElement = -Infinity

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargeElement) {
            secondLargeElement = firstLargeElement
            firstLargeElement = arr[i]
        } else if(arr[i] > secondLargeElement && arr[i] !== firstLargeElement) {
            secondLargeElement = arr[i]
        }
    }

    return secondLargeElement
}

// console.log(findSecondLargestNum(twoArray));


// 3. Rotate an array to the right by k positions.
// const threeArray = [1, 2, 3, 4, 5, 4, 6, 1, 2, 7, 34, 56]
// const k = 3
function rotateElementRight(arr, k) {
    k = k % arr.length
    for (let i = 0; i < k; i++) {
        const last = arr.pop()
        arr.unshift(last)
    }
    return arr
}

// console.log(rotateElementRight(threeArray, k))



// 4. Rotate an array to the left by k positions.
// const fourArray = [1, 2, 3, 4, 5, 4, 6, 1, 2, 7, 34, 56]
// const k = 2
function rotateElementLeft(arr, k) {
    k = k % arr.length
    for(let i = 0; i < k; i++) {
        const first = arr.shift()
        arr.push(first)
    }
    return arr
}

// console.log(rotateElementLeft(fourArray, k));


// 5. Check if an array is sorted.
// const fiveArray = [1, 2, 3, 4, 5, 4, 6, 1, 2, 7, 34, 56]   O/P:  false
const fiveArray = [6, 5, 4, 3, 2, 1]   // O/P:  true

// function descendingSort(arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] < arr[i + 1]) {
//             return false
//         }
//     }
//     return true
// }

// console.log(descendingSort(fiveArray));


// const newFiveArray = [1, 2, 3, 4, 5]    O/P: true
const newFiveArray = [1, 4, 2, 3, 5]   // O/P: false

function ascendingSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}

// console.log(ascendingSort(newFiveArray));




// 6. Find all duplicate elements in an array.
// const sixArray = [1, 2, 3, 4, 5, 4, 6, 1, 2, 7, 34, 56]
function findDuplicate(arr) {
    let duplicateArr = []
    let duplicateElement = []
    for (let i = 0; i < arr.length; i++) {
        if(duplicateArr.includes(arr[i])) {
            duplicateElement.push(arr[i])
        } else {
            duplicateArr.push(arr[i])
        }
    }
    return [duplicateArr, duplicateElement]
}

// console.log(findDuplicate(sixArray));


// 7. Find the frequency of each element. OR count occurence of all the items
// const sevenArray = [7, 8, 5, 8, 8, 7, 5, 1, 8]
// const sevenArray = [7, 8, 5, 8, 8, 7, 59, 1, 82, 32, 59, 1, 32]

let count = {}

function frequencyOfElement(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(count[arr[i]]) {
            count[arr[i]]++
        } else {
            count[arr[i]] = 1
        }
    }

    return count
}

// console.log(frequencyOfElement(sevenArray));



// 8. Merge two arrays into one.

// const arrayOne = [1, 2, 3, 4, 5, 6]
// const arrayTwo = [7, 8, 9, 20, 22]

// const mergedArray = []   This will persist the old output and will merge array in that output itself  (BUGGY)

function finalArray(arrOne, arrTwo) {
    const mergedArray = []     // this will not persist the old output and will reset the old output
    
    for(let i = 0; i < arrOne.length; i++) {
        mergedArray.push(arrOne[i])
    }
    for(let j = 0; j < arrTwo.length; j++) {
        mergedArray.push(arrTwo[j])
    }
    
    return mergedArray
}

// console.log(finalArray(arrayOne, arrayTwo))
// console.log(finalArray(arrayOne, arrayTwo))    this is mergedArray which is declared outside the function and this will be BUGGY output. But if we use it for mergedArray which is declared inside the function than at that time it will not persist the old output and will create new output every time





// 9. Find the intersection of two arrays.
const arrOne = [1, 4, 1, 5, 6, 3] 
const arrTwo = [1, 2, 3, 1]

function intersectionArray(arrOne, arrTwo) {
    let resultArray = []
    for(let i = 0; i < arrOne.length; i++) {
        if(arrTwo.includes(arrOne[i]) && !resultArray.includes(arrOne[i])) {
            resultArray.push(arrOne[i])
        }
    }

    return resultArray
}

console.log(intersectionArray(arrOne, arrTwo));
