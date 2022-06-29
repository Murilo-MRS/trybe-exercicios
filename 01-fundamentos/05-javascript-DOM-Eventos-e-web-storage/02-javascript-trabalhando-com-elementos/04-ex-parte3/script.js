  let acessaPai = document.getElementById("pai");

  
  for (let index = acessaPai.childNodes.length - 1; index >= 0; index -= 1) {
    let element = acessaPai.childNodes[index];
    if (element.id !== 'elementoOndeVoceEsta') {
      acessaPai.removeChild(element);
    }
  }
  console.log(acessaPai.childNodes);

  // console.log(elementoOnde);
  
  // let elementoOnde = document.getElementById('elementoOndeVoceEsta');
  // elementoOnde.removeChild('segundoEUltimoFilhoDoFilho')
  // console.log(elementoOnde);
  // elementoOnde.removeChild('segundoEUltimoFilhoDoFilho');
  

  // const pai = document.getElementById('pai');

  // for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  //   const currentChildren = pai.childNodes[index];
  //   if (currentChildren.id !== 'elementoOndeVoceEsta') {
  //     currentChildren.remove();
  //   }
  // }

  const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
  segundoEUltimoFilhoDoFilho.remove();
