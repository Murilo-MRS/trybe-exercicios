"use strict";
class Animals {
    makeSound(sound) {
        console.log('Som emitido:' + sound);
    }
}
class Dogs extends Animals {
    numberTurn(turns) {
        return turns;
    }
    makeSound(sound) {
        const times = this.numberTurn(5);
        console.log(`Som emitido: ${sound}, ${times} vezes`);
    }
}
class Birds extends Animals {
    makeSound(sound) {
        this.specie = 'pássaro';
        console.log(`O som emitido pelo ${this.specie} é ${sound}`);
    }
}
const dogs = new Dogs();
dogs.makeSound("au au au");
const birds = new Birds();
birds.makeSound("fiu fiu fiu fiu fiu");
