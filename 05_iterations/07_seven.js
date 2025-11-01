// maps & chaining of multiple methods


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )  // this is an example of chaining multiple methods
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
