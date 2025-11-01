// let a = 10
// const b = 20
// var c = 30

// {} this is called as scope, anything declared outside of a scope is called as global scope & anything declared inside a scope is called as block scope

// case - 1
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a);  it will throw an error coz variable 'a' is declared inside a scope & we are displaying its value outside a scope same thing will happen for variable 'b' as well
// console.log(b);
// console.log(c); it will return '30' as an O/P coz while declaring it we have use 'var' keyword

// case - 2

let a = 300 // this is global scope
if (true) {
    let a = 10
    const b = 20
    // console.log("This is inner value of variable a : ", a);
}

// console.log(a);


function one() {
    const username = "prit"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);  coz this is outside of the scope
    two()
}
one()

if (true) {
    const username = "prit"
    if (username === "prit") {
        const website = " google"
        // console.log(username + website);
    }

    // console.log(website); this will throw an error coz it outside of the scope
}
// console.log(username); even this will not work properly & will throw an error


console.log(addOne(5)); // this is executed as well as it is displaying the O/P. In this we are holding addOne function in any variable so it will not throw any error
function addOne(num) {
    return num + 1
}
(addOne(5))  // this is getting executed but will not show any O/P
// console.log(addOne(5));


// console.log(addTwo(5)); // this will throw an error coz we are using addTwo as a function & holding it in the variable with the same name 
const addTwo = function addTwo(num) {
    return num + 2
}
// addTwo(5) this is getting executed but will not show any O/P