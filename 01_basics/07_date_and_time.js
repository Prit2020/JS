let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof(myDate));  // it will return an object

// let anotherDate = new Date(2023, 0, 23)  // months in JS starts from zero
// console.log(anotherDate);
// console.log(anotherDate.toDateString());

// let anotherDate = new Date(2023, 0, 23, 5, 3) // this another way/method of declaring date in this we have also included time

// let anotherDate = new Date("2023-01-18") // this is in "YYYY-MM-DD" format

let anotherDate = new Date("01-24-2023") // this system is used in india "MM-DD-YYYY"
// console.log(anotherDate.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(anotherDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.getTime());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday:"long"
})
// console.log(newDate.toLocaleString());
