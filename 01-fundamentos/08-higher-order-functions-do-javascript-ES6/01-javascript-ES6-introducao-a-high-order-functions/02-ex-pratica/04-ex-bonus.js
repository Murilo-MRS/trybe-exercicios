const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragon = () => {
  let dano = Math.round(Math.random() * dragon.strength + 1);
  (dano >= 15) ? dano : dano = 15;
  return dano;
};

console.log(danoDragon());
const danoWarrior = () => {
    let dano = Math.round(Math.random() * (warrior.strength * warrior.weaponDmg) + 1);
    (dano >= warrior.strength) ? dano : dano = warrior.strength;
    return dano;
};
console.log(danoWarrior());

const danoMago = () => {
    
    let dano = Math.round(Math.random() * (mage.intelligence * 2) + 1);
    (dano >= mage.intelligence) ? dano : dano = mage.intelligence;
    let consumoMana = mage.mana - 15;
    
    if (mage.mana < 15) {
        consumoMana = mage.mana - 0;
        return `Não possui mana suficiente`;
    }
    mage.mana = consumoMana;
    return {dano: dano, manaAtual: consumoMana};
}
console.log(danoMago());
console.log(danoMago());
console.log(danoMago());
console.log(danoMago());
console.log(danoMago());
console.log(danoMago());
console.log(danoMago());
console.log(danoMago());
console.log(danoMago());
