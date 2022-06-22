let nomeDaPeca = "TOrre";

nomeDaPeca = nomeDaPeca.toLowerCase();

switch (nomeDaPeca) {
    case "rei":
        console.log('bispo -> verticais, horizontais, diagonais mas em uma casa');
        break;
    case "rainha":
        console.log('bispo -> verticais, horizontais, diagonais quantas casas quiser');
        break;
    case "bispo":
        console.log('bispo -> diagonais quantas casas quiser');
        break;
    case "cavalo":
        console.log('cavalo -> L');
        break;
    case "torre":
        console.log('torre -> vertical e horizontal quantas casas quiser');
        break;
    case "peão":
        console.log('peão -> vertical e frente em uma casa');
        break;

    default: console.log("peça inválida");
        break;
}