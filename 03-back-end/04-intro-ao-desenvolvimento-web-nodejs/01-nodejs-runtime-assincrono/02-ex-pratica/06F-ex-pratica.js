const fs = require('fs').promises;

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter(
    (simpson) => simpson.id !== '8'
  );

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson.concat([
    { id: '15', name: 'Maggie Simpson' },
  ]);
  // com spread seria assim:
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile(
    './simpsonsFamily.json',
    JSON.stringify(simpsonsWithMaggie)
  );
}

// ...
function main() {
  replaceNelson();
}
main();
