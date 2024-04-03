listaNumeros=[23, 16, 11, 8, 19, 14, 5, 21]
function verificaPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

function numerosPrimos(numeros) {
    let primos = [];
    for (let i = 0; i < numeros.length; i++) {
        if (verificaPrimo(numeros[i])) {
            primos.push(numeros[i]);
        }
    }
    return primos;
}

let primos = numerosPrimos(numeros);
console.log("Os números primos são: " + primos);