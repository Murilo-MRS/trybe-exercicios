type Slices  = 4 | 6 | 8;

interface Pizza {
  flavor: string,
  slices: Slices
}

const calabresa: Pizza = {
  flavor: "Calabresa",
  slices: 8
}

console.log(calabresa);

const marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6
}

console.log(marguerita);


const nutella: Pizza = {
  flavor: "Nutella",
  slices: 4
}

console.log(nutella);

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type Sugar = "Nutella" | "Goiabada com Queijo" | "Marshmallow";

interface PizzaCommon extends Pizza {
  flavor: Common
}

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
};

interface PizzaSugar extends Pizza {
  flavor: Sugar,
  slices: 4
}

const calabresaTwo: PizzaCommon = {
  flavor: "Calabresa",
  slices: 6
}

console.log(calabresaTwo);

const frango: PizzaCommon = {
  flavor: "Frango",
  slices: 8
}

console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: "Pepperoni",
  slices: 6
}

console.log(pepperoni);

const margueritaTwo: PizzaVegetarian = {
  flavor: "Marguerita",
  slices: 8
}

console.log(margueritaTwo);

const palmito: PizzaVegetarian = {
  flavor: "Palmito",
  slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaSugar = {
  flavor: "Goiabada com Queijo",
  slices: 4
}

console.log(goiabadaEQueijo);