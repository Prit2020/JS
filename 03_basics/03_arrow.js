const user = {  // this entire object is our current context
    username: "prit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // 'this' keyword is used to give reference of the current context
        // console.log(this); // it will display everything which is there in these object. It will return whatever things are there in this object, which is its current context as well
    }
}

// user.welcomeMessage() // this will reffer to the current context
// user.username = "sam" // here we have change its value or context
// user.welcomeMessage()

// console.log(this);  // this will return an empty object as there is nothing in global scope.

function one() {
    let username = "prit"
    console.log(this); // 'this' keyword holds many things inside it & if we try to use it inside a function or arrow function it will not work

    console.log(this.username);
}
one()


// arrow function 
// const one = () => {
// let username = "prit"
// console.log(this.username);
// console.log(this);
// }  
// one()  // this will also work same as normal function & will return same O/P as above function

// const addTwo = (num1, num2) => {
//     return num1 + num2  // this is an example of explicite return type wherein we have to write 'return' keyword
//     }  
//     console.log(addTwo(3, 4));

const addTwo = (num1, num2) => (num1 + num2)  // this is an example of explicite return type wherein we don't have to write 'return' keyword  
console.log(addTwo(3, 4));

// const objectName = () => {username: "prit"} // this will not work & will return 'undefined'
// console.log(objectName())

// const objectName = () => ({username: "prit"})
// console.log(objectName())

// ************** remember *************

/*
whenever we use curly brackets we have to use 'return' keyword & whenever we use paranthesisat that time we don't write 'return' keyword & it is used for a function which as only single line in it
*/ 