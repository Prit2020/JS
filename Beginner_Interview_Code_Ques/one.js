// 1. Write a program to reverse a string in JavaScript.

function reverseString(str) {
    // return str.split("").reverse().join("")
    // return str.split("")    // the split method will return an array of single element ['h', 'e', ....]
    return [...str].reverse().join("")
}

// console.log(reverseString("Hello prit"));


// the split method will convert the string into an arrray, than will get reverse using reverse() method and afterwards it will be converted into a single string using join() method



// reverse string using for loop
function reverseString(str) {
    let reversed = ""
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

// console.log(reverseString("hello using for loop"))

// for loop logic
/*

The variable i starts from the last index of the string. string in JS are zero-indexed.
The loop will continue running as long as i is greater than or equal to 0.
This ensures we move from the last character to the first character.

After every iteration, we decrease i by 1.
This moves the loop from the end of the string towards the beginning.

*/



// 2. Write a function to check if a number is even or odd.
function checkEvenOrOddNumber(num) {
    if(num % 2 === 0) {
        return ("Even number")
    }
    if(num % 2 === 1) {
        return ("Odd number")
    }
    else {
        return ("Not a valid number")
    }
}

// console.log(checkEvenOrOddNumber(17));



// 3. Write a function to find the largest number in an array.
// const array = [1, 34, 45, 46, 67, 99, 12, 23]
// console.log(Math.max(...array));


function findLargestNumber(arr) {
    let largestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largestNumber) {
            largestNumber = arr[i]
        }
    }
        return largestNumber
}

// console.log(findLargestNumber([1, 34, 45, 46, 67, 12, 123]));



// 4. Write a function to count the number of vowels in a string.

function countVowel(str) {
    const match = str.match(/[aeiou]/gi)  // this is .match() method it uses a parameter as regular expression. 'g' is for global flag, also used for finding all the matches in a string. 'i' is for case insensitive flag match both uppercase and lowercase
    return match ? match.length : 0
}

const string = "HEllo Axe"
// console.log(countVowel(string));


function countVowel(str) {
    let vowels = "aeiouAEIOU"
    let count = 0
    for (const char of str) {
        if(vowels.includes(char)) {
            count++
        }
    }
    return count
}

const char = "HEllo World"
// console.log(countVowel(char));


// 5. Write a program to find the factorial of a number using recursion.

function factorialOfNumber(num) {
    if(num === 0 || num === 1) {
        return 1
    }

    return num * factorialOfNumber(num - 1)
}

// console.log(factorialOfNumber(5));


function factOfNumber(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

// console.log(factOfNumber(4));


// 6. Write a function to check if a string is a palindrome.

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if(str[i] != str[j]) {
            return false
        }
        j--
    }
    return true
}

// console.log(isPalindrome("hello"));


function isPalindrome(str) {
    let reverse = ""
    for(let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    if(reverse === str) {
        return true
    }
    else {
        return false
    }
}

// console.log(isPalindrome("hello"));



function isPalindrome(str) {
    let reverse = str.split("").reverse().join("")
    if(reverse === str) {
        return true
    }
    else {
        return false
    }
}

// console.log(isPalindrome("car"));


// 7. Write a function to remove duplicates from an array.

function removeDuplicate(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log("this is arr", arr[i]);
    }
}

const arr = [10, 20, 30, 40, 50]
console.log(removeDuplicate(arr));
