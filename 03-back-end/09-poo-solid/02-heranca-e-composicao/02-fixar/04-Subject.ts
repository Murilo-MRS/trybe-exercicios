/* `Class`: Subject
`Attributes`:
    - name: nome da disciplina
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome
`Validations`:
    - O nome tem que possuir no mínimo 3 caracteres */

class Subject {

  constructor(private _name: string) {
    this._name = _name;
  }
  
  public get name() : string {
    return this._name
  }
  
  public set name(name : string) {
    if (name.length < 3) {
      throw new Error("O nome tem que possuir no mínimo 3 caracteres");
    }
    this._name = name;
  }
  
}

const jax = new Subject('Matematica');
// console.log(jax.name);
// jax.name = 'In';
// console.log(jax.name);
// console.log(jax);

// console.log(jax.name('Ersadsd'));
// console.log(jax.name('Ersadsd'));