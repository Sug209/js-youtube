const accountId=12637238
let accountEmail="sujanlama@gmail.com"
var accountPassword="111"
accountCity="Ktm"
let accountState;

// accountId=2 // not allowed

accountEmail="sujan@gmail.com"
accountPassword="222"
accountCity="Hetauda"

//console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and fucntional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])