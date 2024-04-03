let nota1=8;
let nota2=9;
let nota3=7;
function calcularMedia(nota1,nota2,nota3) {
    let media=(nota1+nota2+nota3)/3;
    return media;
}
let resultadoMedia = calcularMedia(nota1, nota2, nota3);
console.log("A média das notas é:" +resultadoMedia);
