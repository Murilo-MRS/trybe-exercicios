"use strict";
class Student {
    constructor(enrollment, name) {
        this._enrollment = enrollment;
        this._name = name;
        this._examsGrades = [];
        this._assignmentsGrades = [];
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
        this._name = value;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        if (value.length > 4) {
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        }
        this._examsGrades = value;
    }
    get assignmentsGrades() {
        return this._assignmentsGrades;
    }
    set assignmentsGrades(value) {
        if (value.length > 2) {
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        }
        this._assignmentsGrades = value;
    }
    sumGrades() {
        return [...this.examsGrades, ...this.assignmentsGrades]
            .reduce((previousNote, note) => {
            const nextNote = note + previousNote;
            return nextNote;
        }, 0);
    }
    sumAverageGrade() {
        const sumGrades = this.sumGrades();
        const divider = this.examsGrades.length + this.assignmentsGrades.length;
        return Math.round(sumGrades / divider);
    }
}
// Para testar!
const personOne = new Student('202001011', 'Maria da Silva');
personOne.examsGrades = [25, 20, 23, 23];
personOne.assignmentsGrades = [45, 45];
console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());
