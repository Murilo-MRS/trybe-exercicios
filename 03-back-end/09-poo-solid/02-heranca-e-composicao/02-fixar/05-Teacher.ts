import crypto from 'crypto';
import Person from "./01-Person";
import Employee from "./03-Employee";
import Subject from "./04-Subject";

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(
      name: string,
      birthDate: Date,
      salary: number,
      subject: Subject,
    ) {
    super(name, birthDate);
    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  public get registration() : string {
    return this._registration;
  }
  
  public set registration(registration : string) {
    if(registration.length < 16) throw new Error("O registro deve possuir no mínimo 16 caracteres");
    
    this._registration = registration;
  }

  public get salary() : number {
    return this._salary;
  }
  
  public set salary(salary : number) {
    if(salary < 0) throw new Error("O salário não pode ser negativo.");
    
    this._salary = salary;
  }

  public get subject() : Subject {
    return this._subject;
  }
  
  public set subject(subject : Subject) {
    this._subject = subject;
  }

  public get admissionDate() : Date {
    return this._admissionDate;
  }
  
  public set admissionDate(admissionDate : Date) {
    if (admissionDate.getTime() > new Date().getTime()) throw new Error("A data de admissão não pode ser no futuro");
    
    this._admissionDate = admissionDate;
  }
  
  generateRegistration(): string {
    return crypto.randomBytes(8).toString('hex');
  }
}

// Para testar!
// ./index.ts

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro
//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;


/* `Class`: Teacher
`Extends`: Person
`Implements`: Employee
`Attributes`:
    - subject: a disciplina lecionada pela pessoa professora
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário
      e a disciplina
`Validations`:
    - O registro deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro */