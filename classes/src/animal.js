export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    
    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }
    
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`
    }

    static return10() {
        return 10;
    }
}

export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }

    // Overriding the makeNoise method. This is achieved through Prototypal Inheritance. When using extends, the Animal object will be set
    // as the Prototype (__proto__ object in chrome) of the object created using the Cat class.
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}