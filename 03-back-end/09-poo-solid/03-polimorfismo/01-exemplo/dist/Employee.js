"use strict";
/*
Dicionário en-pt:
- employee: pessoa empregada/funcionária
*/
class Employee {
    constructor(name) {
        this.name = name;
    }
}
class Instructor extends Employee {
    constructor(name) {
        super(name);
        this.name = name;
        this.MIN_SALARY = 10000;
    }
    work() { console.log(`${this.name} está auxiliando as pessoas estudantes em mentorias.`); }
}
class Specialist extends Employee {
    constructor(name) {
        super(name);
        this.name = name;
        this.MIN_SALARY = 20000;
    }
    work() { console.log(`${this.name} está ministrando uma aula ao vivo.`); }
}
class Facilitator extends Employee {
    constructor(name) {
        super(name);
        this.name = name;
        this.MIN_SALARY = 50000;
    }
    work() { console.log(`${this.name} está conduzindo um 1:1.`); }
}
const instructor = new Instructor('Victor');
const specialist = new Specialist('Gus');
const facilitator = new Facilitator('Silvinha');
instructor.work(); // Victor está auxiliando as pessoas estudantes em mentorias.
specialist.work(); // Gus está ministrando uma Aula Ao Vivo.
facilitator.work(); // Silvinha está conduzindo um 1:1.
console.log(facilitator.MIN_SALARY);
