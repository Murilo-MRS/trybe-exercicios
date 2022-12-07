const fs = require('fs').promises;

const readAll = async () => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const parseData = JSON.parse(data);
    const arrayData = parseData.map((e) => `${e.id} - ${e.name}`);
    arrayData.forEach(e => console.log(e));
  } catch (error) {
    console.error(error.message);
  }
};

const main = async () => {
  await readAll();
};

main();