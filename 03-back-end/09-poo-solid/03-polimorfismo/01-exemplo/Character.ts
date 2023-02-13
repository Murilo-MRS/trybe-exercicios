abstract class Character {
  abstract talk() : void;
  abstract specialMove() : void;
};

class MeleeCharacter extends Character {
  constructor (private _name : string) {
    super();
  };

  talk() : void {
    console.log(`Sou ${this._name}`);
  };

  specialMove() : void {
    console.log(`${this._name} usou Ataque de perto`);
  };

}

class LongRangeCharacter extends Character {
  constructor (private _name : string) {
    super();
  };

  talk() : void {
    console.log(`Sou ${this._name}`);
  };

  specialMove() : void {
    console.log(`${this._name} usou Ataque de longe`);
  };

}

const knight = new MeleeCharacter('Yoshi');
const archer = new LongRangeCharacter('Samus');

archer.talk();
knight.talk();
archer.specialMove();
knight.specialMove();