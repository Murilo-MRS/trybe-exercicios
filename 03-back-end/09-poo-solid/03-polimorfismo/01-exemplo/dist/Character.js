"use strict";
class Character {
}
;
class MeleeCharacter extends Character {
    constructor(_name) {
        super();
        this._name = _name;
    }
    ;
    talk() {
        console.log(`Sou ${this._name}`);
    }
    ;
    specialMove() {
        console.log(`${this._name} usou Ataque de perto`);
    }
    ;
}
class LongRangeCharacter extends Character {
    constructor(_name) {
        super();
        this._name = _name;
    }
    ;
    talk() {
        console.log(`Sou ${this._name}`);
    }
    ;
    specialMove() {
        console.log(`${this._name} usou Ataque de longe`);
    }
    ;
}
const knight = new MeleeCharacter('Yoshi');
const archer = new LongRangeCharacter('Samus');
archer.talk();
knight.talk();
archer.specialMove();
knight.specialMove();
