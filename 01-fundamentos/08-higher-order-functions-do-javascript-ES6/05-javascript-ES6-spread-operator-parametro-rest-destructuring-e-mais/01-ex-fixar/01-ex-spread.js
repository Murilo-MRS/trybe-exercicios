// Faça uma lista com as suas frutas favoritas
const specialFruit = ['apple', 'pineapple', 'passion fruit'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['banana', 'avocado', 'mango'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));