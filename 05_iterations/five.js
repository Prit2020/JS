// for each loop

/*

Syntax of for each loop :-
forEach(callBackFunction)

*/

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ 
//     console.log(val);
// } )

// we can write a function in this method as shown above or else we can pass it in the form of a arrow function as shown below

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )