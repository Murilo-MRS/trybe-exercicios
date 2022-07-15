const trocaX = nome => {
    let frase = `Tryber x aqui!`;
    let arrayFrase = frase.split(' ')
    for (let index = 0; index < arrayFrase.length; index += 1) {
        if (arrayFrase[index] === 'x') {
            arrayFrase[index] = nome;
        }
    }
    
    return arrayFrase.join(' ');
}

const mainSkilss = trocaX => {
    const skills = ['HTML', 'CSS', 'JS'];
    return `${trocaX}
    Minhas três principais habilidades são:
    - ${skills[0]}
    - ${skills[1]}
    - ${skills[2]}
    `;
}

console.log(mainSkilss(trocaX('Bruno')));