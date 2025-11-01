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
    // console.log(num1 + num2);    
}
addTwoNumber(2, 3) // this are called as arguments

// case - 2
// function addTwoNumber(num1, num2) {  
//     console.log(num1 + num2);    
// }
// addTwoNumber(2, "3") // now this will act as string & will return 23 as OP

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
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){   // in this "sam" is a hardcoded value. If user does not enters name then these value will be used and if user provides a valid username then it will be override.
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Prit"))


// the below senarios are used when we are just adding items in our shopping cart 
// case - 1
// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(2));

// case - 2
function calculateCartPrice(...num1) {  // (...num1) this is 'rest' operator
    return num1
}
// console.log(calculateCartPrice(200, 300, 400)); // when we add multiple arguments but it will only display the 1st value, to display all the values we use 'rest' operator, now it will return an single array with all the values in it

// how to pass object in a function 
const user = {
    userName: "prit",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);  // how to access any values inside a object
}
// handleObject(user) // in this we are 1st creating an object & then using it to execute this for these we need to add the object name as argument then only it will work 

handleObject({  // in this we are directly declaring our object in the argument
    userName: "sam",
    price: 299
})

// same thing can be done for array as well
const newArray = [2, 3, 4, 5, 6, 7]

function handleArray(anyarray){
    return anyarray[4]
}
// console.log(handleArray(newArray)); 
console.log(handleArray([2, 4, 5, 1, 10, 17])); 
