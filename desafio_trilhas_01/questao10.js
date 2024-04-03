let texto="LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let contador=0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === texto[i].toUpperCase() && texto[i] !== ' ') {
        contador++;
    }
}

console.log("Número de letras maiúsculas: " + contador);