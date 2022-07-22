const techList = (arr, name) => {
  //   if (arrayTechnologies.length === 0) return "Vazio!";
  if (arr.length === 0) {
    return 'Vazio!'
  }
  const oredenadoArray = arr.sort();
  const array = [];
  for (let index = 0; index < oredenadoArray.length; index += 1) {
    array.push({
      tech: oredenadoArray[index],
      name,
    });
  }
  return array;
};
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');

module.exports = techList;
