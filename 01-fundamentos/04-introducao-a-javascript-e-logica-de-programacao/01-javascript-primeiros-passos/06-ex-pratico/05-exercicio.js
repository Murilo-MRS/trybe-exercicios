const anguloA = 60;
const anguloB = 40;
const anguloC = 80;

const resultado = anguloA + anguloB + anguloC;



if (anguloA > 0 && anguloB > 0 && anguloC > 0) {
    if (resultado === 180) { 
        console.log("é um triângulo")
    } else {
        console.log("não é um triângulo")
    }
} else {
    console.log("angulo inválido")
}