if (false) {
    var example = 5; //undefined
    //let example = 5; // reference error
}

console.log(example)

const exampleConst = 5;
// exampleConst = 10; // TypeError
console.log(exampleConst)

// can change an array. we are not changing the reference but the actual array (object)
const exampleArray = [];
exampleArray.push(5)
console.log(exampleArray)

// can change an object. we are not changing the reference but the actual object
const exampleObj = {};
exampleObj.firstName = 'Sai';

console.log(exampleObj)