const wakeUp = () => console.log('Acordando!!!');;
const coffeTime = () => console.log('Bora tomar café!!');;
const sleep = () => console.log('Partiu dormir!!');;

const doingThings = (func) => func();

doingThings(coffeTime);