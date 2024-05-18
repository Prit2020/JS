// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "prit",
    "full name": "prit chudasama", // in this case u can'nt use 1st method for accessing the object
    // mySym: "mykey1", not correct way of using symbol
    [mySym]: "mykey1",
    age: 20,
    location: "mumbai",
    email: "prit@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Sunday"]
}

// console.log(jsUser.email); // not so effective way to access an object
// console.log(jsUser["email"]); // use this instead & do not use this method

// console.log(jsUser["full name"]);

// console.log(typeof jsUser.mySym); // this return mykey1 but when u will check its datatype than it is string therefore this not right way of using a symbol

// console.log(jsUser[mySym]) // this correct way of using symbol

// jsUser.email = "prit@google.com" // to change or overide any value
// Object.freeze(jsUser) // this will freeze entire object & it will not allow any changes 
// jsUser.email = "prit123@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());