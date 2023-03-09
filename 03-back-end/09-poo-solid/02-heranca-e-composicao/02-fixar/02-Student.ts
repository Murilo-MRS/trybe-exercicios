import Person from "./01-Person";
import crypto from "crypto";

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];
  
  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = Student.generateEnrollment();
  }
  
  get enrollment(): string {
    return this._enrollment;
  }
  
  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }
  
  get examsGrades(): number[] {
    return this._examsGrades;
  }
  
  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
  
    this._examsGrades = value;
  }
  
  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }
  
  set assignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }
  
    this._assignmentsGrades = value;
  }
  
  sumGrades(): number {
    return [...this.examsGrades, ...this.assignmentsGrades]
      .reduce((previousNote, note) => {
        const nextNote = note + previousNote;

        return nextNote;
      }, 0);
  }
  
  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.assignmentsGrades.length;

    return Math.round(sumGrades / divider);
  }

  private static generateEnrollment(): string {
    return crypto.randomBytes(8).toString('hex');
  }
}
  
// Para testar!
  
const personOne = new Student('Maria da Silva', new Date ('2010/01/11'));
personOne.examsGrades = [25, 20, 23, 23];
personOne.assignmentsGrades = [45, 45];


const personTwo = new Student('Jorge da Massa', new Date ('2010/01/11'));
personTwo.examsGrades = [15, 20, 23, 19];
personTwo.assignmentsGrades = [32, 45];
  

const personThree = new Student('Carlao Bazuca', new Date ('2010/01/11'));
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
