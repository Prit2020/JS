const tinderUser = new Object() // this is a singleton object
const tinderUSer2 = {} // this is non singleton object

// both of the variables will return empty object
// console.log(tinderUser);
// console.log(tinderUSer2);

const instaUser = {}
instaUser.id = "123abc"
instaUser.name = "prit"
instaUser.isLoggedIn = false
// console.log(instaUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prit",
            lastname: "chudasama"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// to combine 2 or more objects into a single objects

// const obj3 = { obj1, obj2} // do not use this

// const obj3 = Object.assign({}, obj1, obj2) // correct way of combining multiple objects
// const obj3 = Object.assign(obj1, obj2) // O/P is same as above (obj3)

const obj3 = {...obj1, ...obj2} // O/P will remain same for this also

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email)

// console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn')); // it used to check wheather the object has property or key mention in the parameter
// console.log(instaUser.hasOwnProperty('isLogged'));


// object destruturing

const course = {
    courseName: "js in hindi",
    price: "999",
    courseTeacher: "prit"
}

// console.log(course.courseName); // rather than writing this everytime we can use diff method which is given below 

const {courseName} = course // from the object display the given parameter 

// const {courseName: name} rather than writting courseName u can give it a diff name & can call it by that name to display the values O/P will remain same 

const {courseName: name} = course
console.log(courseName);