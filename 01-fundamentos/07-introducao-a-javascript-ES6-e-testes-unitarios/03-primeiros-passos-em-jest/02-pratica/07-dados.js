// Dados
const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];

  // Pesquisa
  const searchEmployee = (id, detail) => {
    // Implemente seu código aqui
    let colaborador = '';
    for (let index = 0; index < professionalBoard.length; index += 1) {
        const element = professionalBoard[index];
        if (element.id === id) {
            colaborador = element;
        } 
    }
    if(!colaborador) {
        throw new Error(`ID não identificada`);
    };
    if (!colaborador[detail]) {
        throw new Error(`Informação indisponível`);
    }
    return colaborador[detail];
  };
// console.log(searchEmployee('1256-4', 'firstName'));
module.exports = searchEmployee;