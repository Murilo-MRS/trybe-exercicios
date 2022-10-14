const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const teste = (array1, array2) => {
    let nota = 0;
    for (let index = 0; index < array1.length; index += 1) {
        if (array2[index] === array1[index]) {
            nota += 1;
        } else if (array2[index] === 'N.A') {
            nota -= 0.5;
        }
    }
    return nota;
};

const hof = (array1, array2, callback) => {
    return callback(array1, array2);
}

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, teste));