"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _01_Person_1 = __importDefault(require("./01-Person"));
const crypto_1 = __importDefault(require("crypto"));
class Student extends _01_Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._examsGrades = [];
        this._assignmentsGrades = [];
        this._enrollment = Student.generateEnrollment();
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        if (value.length < 16)
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        this._enrollment = value;
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
    static generateEnrollment() {
        return crypto_1.default.randomBytes(8).toString('hex');
    }
}
// Para testar!
const personOne = new Student('Maria da Silva', new Date('2010/01/11'));
personOne.examsGrades = [25, 20, 23, 23];
personOne.assignmentsGrades = [45, 45];
const personTwo = new Student('Jorge da Massa', new Date('2010/01/11'));
personTwo.examsGrades = [15, 20, 23, 19];
personTwo.assignmentsGrades = [32, 45];
const personThree = new Student('Carlao Bazuca', new Date('2010/01/11'));
personThree.examsGrades = [21, 20, 20, 20];
personThree.assignmentsGrades = [30, 45];
console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());
console.log(personTwo);
console.log('Soma de todas as notas: ', personTwo.sumGrades());
console.log('Média de todas as notas: ', personTwo.sumAverageGrade());
console.log(personThree);
console.log('Soma de todas as notas: ', personThree.sumGrades());
console.log('Média de todas as notas: ', personThree.sumAverageGrade());
