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
// exercicio 1 
const adicionaTurno = (obj, key, value) => {
    obj[key] = value;
    return obj;
}
adicionaTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

// exercicio 2 
const listaKeys = obj => Object.keys(obj);
console.log(listaKeys(lesson2));

// exercicio 3
const tamanhoObj = obj => Object.keys(obj).length;
console.log(tamanhoObj(lesson2));

// exercicio 4
const listaValues = obj => Object.values(obj);
console.log(listaValues(lesson2));

// exercicio 5
const lessons = {lesson1, lesson2, lesson3};
const allLessons = Object.assign({}, lessons);
console.log(allLessons);

// exercicio 6
const retornaTotalDeAlunos = obj => {
    let totalAlunos = 0;
    // obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
    const lesson = Object.keys(obj);
    for (const key in lesson) {
        totalAlunos += obj[lesson[key]].numeroEstudantes;
    }
    return totalAlunos;
};
console.log(retornaTotalDeAlunos(allLessons));
// exercicio 7


// exercicio 8


