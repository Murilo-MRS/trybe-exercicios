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
const getValueByNumber = (obj, index) => {
    const valores = Object.values(obj);
    return valores[index];
};
console.log(getValueByNumber(lesson1, 0));

// exercicio 8
const verifyPair = (obj, key, value) => {
    const objetoTestarValue = Object.entries(obj);
    let igual = false;
    for (const index in objetoTestarValue) {
        if (objetoTestarValue[index][0] === key && objetoTestarValue[index][1] === value) {
            igual = true;
        }
    }
    return igual;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
// bonus 1
const contaAlunos = (obj) => {
    let alunos = 0;
    const array = Object.keys(obj);

    for (const key in array) {
        if(obj[array[key]].materia === 'Matemática') {
            alunos += obj[array[key]].numeroEstudantes;
        }
    }
    return alunos;
};
console.log(contaAlunos(allLessons));

const createReport = (obj, value) => {
    const array = Object.keys(obj);
    let materiasMinistradas = [];
    for (const index in array) {
        if (obj[array[index]].professor === value) {
            materiasMinistradas.push(obj[array[index]].materia);
        }
    }

    return { professor: value, aulas: materiasMinistradas, estudantes: contaAlunos(allLessons)}
};

console.log(createReport(allLessons, 'Maria Clara'));

// GABARITO BONUS 2
/* const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara')); */