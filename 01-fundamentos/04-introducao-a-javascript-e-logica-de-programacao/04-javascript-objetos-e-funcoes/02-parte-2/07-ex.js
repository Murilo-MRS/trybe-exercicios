function name(stringWord, stringEnding) {
    stringWord = stringWord.split('');
    stringEnding = stringEnding.split('');
    let control = true;
    for (let index = 0; index < stringEnding.length; index += 1) {
        if (stringWord[stringWord.length - stringEnding.length + index] != stringEnding[index]) {
            control = false;
        }
    }
    return control;
}

console.log(name('trybe', 'be'));
console.log(name('joaofernando', 'fernan'));
