const fs = require('fs').promises;

const getSimpsonById = async (id) => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const parseData = JSON.parse(data);
    const chosenSimpson = parseData.find((simpson) => Number(simpson.id) === id);
    if (!chosenSimpson) {
      throw new Error('id não encontrado');
    }
    return chosenSimpson;
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  const simpson = await getSimpsonById(1);
  console.log(simpson);
};

main();