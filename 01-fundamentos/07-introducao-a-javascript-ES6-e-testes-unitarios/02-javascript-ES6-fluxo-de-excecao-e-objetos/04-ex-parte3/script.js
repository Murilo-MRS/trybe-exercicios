const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const adicionaTurno = (obj, key, value) => {
    obj[key] = value;
    return obj;
}
adicionaTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

const listaKeys = obj => Object.keys(obj);
console.log(listaKeys(lesson2));
