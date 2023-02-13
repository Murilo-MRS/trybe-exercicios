"use strict";
/*
Dicionário en-pt:
- static: estático
*/
class Employees {
    constructor(name) {
        /* Pelo fato do o método addEmployee() ser estático, ou seja, acessível
        apenas a partir da própria classe e não de suas instâncias, é que a
        chamamos a partir de Employee e não do 'this' */
        Employees.addEmployee();
        // Nesse caso, o 'this' se refere à instância dessa classe, que está sendo construída
        this.employeeName = name;
    }
    // Esse é um método exclusivo da classe, por isso estático 
    static addEmployee() {
        /* Nesse caso, como o atributo é estático, melhor forma de acessar
        o atributo é a partir do nome da classe.  */
        Employees.employeeCount += 1;
        console.log(`Total de pessoas funcionárias: ${Employees.employeeCount}`);
    }
    /* Aqui temos o exemplo de método comum que, em contraste com o método estático,
    é utilizado pelas instâncias e não pela classe */
    getName() {
        // Novamente, o 'this' se referindo à instância
        return this.employeeName;
    }
}
/* Atributo estático, que pertence a classe */
Employees.employeeCount = 0;
const employee1 = new Employees('Kissyla'); // Total de pessoas funcionárias: 1
const employee2 = new Employees('Calaça'); // Total de pessoas funcionárias: 2
const employee3 = new Employees('Setinha'); // Total de pessoas funcionárias: 3
