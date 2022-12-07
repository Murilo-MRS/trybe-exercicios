const fs = require('fs').promises;

async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
};

// ...
async function main() {
  await addNelsonToFamily();
}

main();
