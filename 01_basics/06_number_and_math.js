//  number
const score = 400
// console.log(score);

const balance = new Number(500)
// console.log(balance);  
// console.log(balance.toString());
// console.log(typeof(balance));

// console.log(balance.toString().length);

// console.log(balance.toFixed(3));   // it will add 3 zero's after decimal

const newNumb = 123.8266
// console.log(newNumb.toPrecision(3));
// console.log(newNumb.toPrecision(3));  // expected O/P 123 but after decimal point there is 8 therefore it will round-off and will return 124 as O/P

const numbTwo = 1123.8266
// console.log(numbTwo.toPrecision(3));  // this will return 3 precision values & it will convert other numbers into exponential

const bigNumb = 50000000  // since it is not easy to read, by using this method it will seprate them by commas but it will use US standards
// console.log(bigNumb.toLocaleString());

// console.log(bigNumb.toLocaleString('en-IN')); // it seprate them by using commas & it will use Indian standards here

//   ++++++++++++ Math ++++++++

// console.log(Math);
// console.log(Math.abs(-9)); // it will just convert -ve values to +ve
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.1));   // 5 as O/P
// console.log(Math.floor(4.9));  // 4 as O/P
// console.log(Math.min(4, 3, 6, 1, 9));
// console.log(Math.max(4, 3, 6, 1, 9));

console.log(Math.random()); // it will generate random values between 0-1
console.log(Math.random() * 10 + 1); 
console.log((Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


