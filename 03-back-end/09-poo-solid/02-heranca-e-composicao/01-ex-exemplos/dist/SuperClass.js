"use strict";
class SuperClass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class SubClass extends SuperClass {
    constructor() {
        super();
        this.isSuper = false;
    }
    sayHello2() {
        this.sayHello();
    }
}
;
const myFunc = (obj) => {
    obj.sayHello();
    console.log(obj.isSuper ? 'Super!' : 'Sub!');
};
// const superClass = new SuperClass();
const subClass = new SubClass();
// myFunc(superClass);
myFunc(subClass);
