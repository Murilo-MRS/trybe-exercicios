class SuperClass {
  public isSuper : boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello() : void {
    console.log('Olá mundo!');
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }

  sayHello2() : void {
    this.sayHello();
  }
};

const myFunc = (obj: SuperClass) => {
  obj.sayHello();

  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

// const superClass = new SuperClass();
const subClass = new SubClass();

// myFunc(superClass);
myFunc(subClass);