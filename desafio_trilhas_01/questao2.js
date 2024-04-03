listaNumeros=[15,8,90,75,102,6,2];
function maiorNumero(listaNumeros) {
    let numero=listaNumeros[0];
    for(let indice=1; indice<listaNumeros.length;indice++){
        if (numero<listaNumeros[indice]){
            numero=listaNumeros[indice];
        }
    }
    return numero;
}

function menorNumero(listaNumeros){
let numero=listaNumeros[0];
for(let indice=1; indice<listaNumeros.length;indice++){
    if (numero>listaNumeros[indice]){
        numero=listaNumeros[indice];
    }
}
return numero;
}

let menor=menorNumero(listaNumeros);
let maior=maiorNumero(listaNumeros);
console.log("O menor numero é "+menor+" e o maior numero é" +maior);
