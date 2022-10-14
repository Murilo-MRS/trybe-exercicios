
const sum = (...elementos) => {
    return elementos.reduce((acc, curr) => acc + curr, 0)
};

console.log(sum(1,2,3));
