const valorCusto = 10.99;
const valorDeVenda = 50.00;


if (valorCusto >= 0 && valorDeVenda >= 0) {
    const impostoSobreCusto = 1.2;
    const valorCustoTotal = valorCusto * impostoSobreCusto;
    const lucro = valorDeVenda - valorCustoTotal
    const qtdVendida = 1000;
    const lucroTotal = lucro * qtdVendida;
    console.log('Seu lucro total é de : R$ ' + lucroTotal);
} else {
    console.log("ERRO: valores em inválidos");
}
