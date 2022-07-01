let organization = {
    name: 'trybe',
    since: 2019,
  };
  
  // A variável 'storage' pode ser localStorage ou sessionStorage
//   let localStorage = localStorage;
  
  localStorage.setItem('escola', JSON.stringify(organization));
  let org = JSON.parse(localStorage.getItem('escola'));
  console.log(org); // { name: 'trybe', since: 2019 }
  
  let classes = ['2019/set', '2019/oct'];
  localStorage.setItem('turmas', JSON.stringify(classes));
  let cls = JSON.parse(localStorage.getItem('turmas'));
  console.log(cls); // ['2019/set', '2019/oct']