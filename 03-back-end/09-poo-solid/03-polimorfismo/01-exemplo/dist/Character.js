"use strict";
// abstract class Character {
//   abstract talk() : void;
//   abstract specialMove() : void;
// };
// class MeleeCharacter extends Character {
//   constructor (private _name : string) {
//     super();
//   };
//   talk() : void {
//     console.log(`Sou ${this._name}`);
//   };
//   specialMove() : void {
//     console.log(`${this._name} usou Ataque de perto`);
//   };
// }
// class LongRangeCharacter extends Character {
//   constructor (private _name : string) {
//     super();
//   };
//   talk() : void {
//     console.log(`Sou ${this._name}`);
//   };
//   specialMove() : void {
//     console.log(`${this._name} usou Ataque de longe`);
//   };
// }
// const knight = new MeleeCharacter('Yoshi');
// const archer = new LongRangeCharacter('Samus');
// archer.talk();
// knight.talk();
// archer.specialMove();
// knight.specialMove();
class Character {
    static characterPresentation(character) {
        character.talk();
        character.specialMove();
    }
}
class MeleeCharacter extends Character {
    constructor(_name, _specialMoveName) {
        super();
        this._name = _name;
        this._specialMoveName = _specialMoveName;
    }
    ;
    talk() {
        console.log(`Sou ${this._name} e ataco de perto`);
    }
    ;
    specialMove() {
        console.log(`${this._name} usou ${this._specialMoveName}`);
    }
    ;
}
class LongRangeCharacter extends Character {
    constructor(_name, _specialMoveName) {
        super();
        this._name = _name;
        this._specialMoveName = _specialMoveName;
    }
    ;
    talk() {
        console.log(`Sou ${this._name}, e ataco de longe`);
    }
    ;
    specialMove() {
        console.log(`${this._name} usou ${this._specialMoveName}`);
    }
    ;
}
const yoshi = new MeleeCharacter('Yoshi', 'Punch');
const samus = new LongRangeCharacter('Samus', 'Laser');
// yoshi.talk();
// yoshi.specialMove();
// samus.talk();
// samus.specialMove();
Character.characterPresentation(yoshi);
Character.characterPresentation(samus);
