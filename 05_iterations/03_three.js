// for of loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {  // here iterator can be any variable & object can be anything it can array, string, object, etc
    // console.log(`values inside array are: ${num}`);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char are: ${greet}`);
}

// Maps :- they are unique & we cann't repeat the values in map & they are print in the same order

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('FR', "france")

// console.log(map);

for (const key of map) {
    // console.log(key);  // it will be displayed in an array 
}
for (const [key, value] of map) {
    console.log(key, " :- ", value); // by doing so we can destructure the array & we can print its key & ts value 
}

const gameObject = {
    game1: 'NFS',
    game2: 'GTA'

}

for (const gameName of gameObject) {
    // console.log(gameName);  it does not wok on object for object we have different method coz objects are not iterable
}
