let numPrimoMaior = 0;

for (let index = 2; index <= 50; index += 1) {
    let primo = true;
    for (let div = 2; div < index; div += 1) {
        if (index % div === 0) {
            primo = false;
        }
    }
    if (primo) {
        numPrimoMaior = index;
    }
}

console.log(numPrimoMaior);