/*let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = contacts; // this copies by reference. So when a new string is pushed to the contacts array, we can access it using personalFriends as well.

contacts.push("John");

console.log(personalFriends);

*/


let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = [ ...contacts ];  // this creates a new object. So when a new string is pushed to the contacts array, the personalFriends array is not affected.

// let personalFriends = [ "David", ...contacts, "Lily" ]; // this adds David followed by the users from the contacts array and then Lily to personalFriends


contacts.push("John");

console.log(personalFriends);


// This demonstrates the spread operator with objects
let person = {
  name: "Adam",
  age: 25,
  city: "Manchester"
}

let employee = {
  ...person,
  salary: 50000,
  position: "Software Developer"
}

console.log(employee)