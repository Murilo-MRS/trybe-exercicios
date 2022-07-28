// const person = {
//   name: "João",
//   lastName: "Jr",
//   age: 34,
// };

// const { nationality = "Brazilian" } = person;
// console.log(nationality); // Brazilian
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const {firstName, lastName, nationality = 'Brazilian'} = person;
person.nationality = nationality;
const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));