let numero = 12;

function calculaFatorial(numero) {
    let resultado = 1;
    
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

let fatorial = calculaFatorial(numero);
console.log("O fatorial de " + numero + " é " + fatorial);