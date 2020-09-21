import { Animal } from './animal.js';

let cat = new Animal('Cat', 4);

cat.legs = 3;
cat.makeNoise('Meow');
console.log(cat.legs)

// Invoking static method in class
console.log(Animal.return10());

// Calling a getter method. Notice how we are just invoking it as a property on the object
console.log(cat.metaData)