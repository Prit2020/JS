// below is the way to create a promise. Promise takes an function which will have 2 arguments resolve and reject where resolve is related to .then() and reject is related to .catch()

// below is the 1st method of creating a promise where it is stored in an variable, but we can do the same without holding it in an variable as well

// promise is an object
const promiseOne = new Promise(function(resolve, reject) {
    // Do async task, DB calls and network related task
    setTimeout(function(){
        console.log("Async task completed!");
        resolve()   // this method is used to connect resolve and .then()
        
    }, 1000)
})   

promiseOne.then(function() {
    console.log("Promise consumed");   // .then() takes a function which is used for returning the value or task done in the promise. Values from the above (or from promises) are returned here
})

// below is another way or syntax to create promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    }, 1000)
}).then(function() {
    console.log("Async task 2 consumed");
    
})

// below is promise three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "Prit", email: "prit@gmail.com"})    // we can also pass data in this resolve method and that data could be anything it can be object, array
    }, 1000)
})

promiseThree.then(function(user) {     // in this function we pass parameter which will hold the data from the resolve() method from above
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false     // if error = true then it will return the catch block
        if(!error) {
            resolve({usename: "Prit", Password: "1234"})
        } else {
            reject("Error something went wrong")   // this method is used to connect with the .catch()
        }
    }, 1000)
})

promiseFour.then(function(user) {
    console.log(user);
    return user.username;
}).then(function(username) {
    console.log(username);    // this syntax is called the chaining of multiple .then() where first .then() will return some value and then we can directly use that in the second .then()
}).catch(function(error) {
    console.log(error);
    
}).finally(function() {
    console.log("The promise is either resolved or rejected!");
    
})



const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "JS", password: "12345"})
        } else {
            reject("Error JS went wrong")
        }
    }, 1000)
})

// below is another method of consuming an promise by using async and to handle error gracefully we use try and catch block

// async await will assume that promiseFive will return some value and therefore it will not handle error gracefully and therefore we use try catch block over here
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()


// below we use fetch along with async and await
// async function getAllUser() {
// try {
//         const response = await fetch("https://api.github.com/users/Prit2020");
//         // const data = response.json(); // since response.json will take time to get convert therefore we will have to use await here 
//         const data = await response.json()
//         console.log(data);
// } catch (error) {
//     console.log("Error:", error);
// }
    
// }
// getAllUser()


// .then().then() this syntax is called thenable 
fetch('https://api.github.com/users/Prit2020')
.then(function(response) {
    return response.json()     // fetch will return response in string so therefore we will convert it into JSON format and than use it below
}).then(function(data) {      // the above .then() will return some value and from that we want to use some value 
    console.log(data);
}).catch(function(error) {
    console.log("Error fetch went wrong", error);
    
})