// 1. Write a program to flatten a nested array (e.g., [1, [2, [3]]] → [1,2,3]).
const array = [1, [2, [3]]]
// console.log(array.flat(Infinity));  

/* 

flat() is used to flat a nested array into a single array. It also take parameter as depth which defines till how much depth we want to faltten a nested array.

*/

const arr = [1, [2, [3, [4, 5]]], 6];
function flattenArray(array) {
    let result = []
    for (let item of array) {
        if(Array.isArray(item)) {
            result = result.concat(flattenArray(item))
        }
        else {
            result.push(item)
        }
    }
    return result
}

console.log(flattenArray(arr));
