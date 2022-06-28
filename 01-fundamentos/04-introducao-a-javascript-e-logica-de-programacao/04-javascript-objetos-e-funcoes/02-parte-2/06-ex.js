function numero(numNatural) {
    num = 0;
    for (let index = 1; index <= numNatural; index += 1) {
        num += index;
    }
    return num;
}

console.log(numero(5));
