const accountId = 1234
let accountEmail = "prit@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;  // if we just declare a variable & do not specify its datatype & give any values to it then it is undefined

// accountId = 23
// console.log(accountId);  // changing values of const are not allowed

accountEmail = "prit123@google.com"
accountPassword = "2334"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Note:
do not use 'var' coz of scope
only use 'let' and 'const' as keywords while declaring a variable

*/