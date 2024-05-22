/* 

syntax of function

function var_name () {

}

this is called as definition of a function

*/

// function sayMyName() {
//     console.log("P");
//     console.log("R");
//     console.log("I");
//     console.log("T");    
// }

// sayMyName // this is the reference of a function
// sayMyName() // this is execution of a function

// case - 1
function addTwoNumber(num1, num2) {  // (num1, num2) they are called as parameter
    console.log(num1 + num2);    
}
addTwoNumber(2, 3) // this are called as arguments

// case - 2
// function addTwoNumber(num1, num2) {  
//     console.log(num1 + num2);    
// }
// addTwoNumber(2, "3") // now this will act as string & will return string

// case - 3
// function addTwoNumber(num1, num2) {  
//     console.log(num1 + num2);    
// }
// addTwoNumber(2, null)

// case - 4
function addTwoNumber (num1, num2) { 
    // let result = num1 + num2  // this is another way of defining a function using return keyword
    // return result

    return num1 + num2  // this is another way of defining a function
}

const result = addTwoNumber(3, 5)
console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("prit"))