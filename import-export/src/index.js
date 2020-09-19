import { data } from './example.js';
import { add } from './add'; // just to demonstrate that the .js extension is not necessary

let updatedData = data;

data.push(5)
console.log(data);
console.log(updatedData);

console.log(add(4, 5));

