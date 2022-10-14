const nota = 80;

const notaValida = nota <= 100 && nota >= 0;

if (notaValida) {
    if (nota >= 90) {
        console.log("A");
    } else if (nota >= 80){
        console.log("B");
    } else if (nota >= 70){
        console.log("C");
    } else if (nota >= 60){
        console.log("D");
    } else if (nota >= 50){
        console.log("E");
    } else {
        console.log("F");
    }
} else {
    console.log("Nota não é válida")
}

