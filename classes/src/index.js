import { Animal } from './animal.js';

let cat = new Animal('Cat', 4);

cat.legs = 3;
cat.makeNoise('Meow');
console.log(cat.legs)

// Invoking static method in class
console.log(Animal.return10());

// Calling a getter method. Notice how we are just invoking it as a property on the object
console.log(cat.metaData)


// Create object using the Cat class. The Animal object will be set as the prototype of this object
let newCat = new Cat('Cat', 4);
newCat.makeNoise();
console.log(newCat.metaData);


class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    
    introduce() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}

const messi = new Player("Messi", "Argentina");

messi.introduce();

class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }
    
    playTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
    }
}

const roger = new TennisPlayer( "Roger Federer", "Switzerland", 38);

roger.introduce(); // able to do this as the introduce method is available in the prototype(Player) of the object
roger.playTennis();