/* `Interface`: Employee
`Attributes`:
    - registration: número do registro
    - salary: valor do salário
    - admissionDate: data de admissão
`Methods`:
    - generateRegistration: retorna uma string única gerada como registro */

interface Employee {
  registration : string;
  salary : number;
  admissionDate : Date;
  generateRegistration(): string;
}

// Para testar!
// ./index.ts

const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),
  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);
