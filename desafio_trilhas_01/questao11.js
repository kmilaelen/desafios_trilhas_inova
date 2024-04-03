function calcularIdade(dataNascimento) {
    let hoje = new Date();
    let nascimento = new Date(dataNascimento);
    let ano = hoje.getFullYear() - nascimento.getFullYear();
    let mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        ano--;
    }
    return ano;
}

let dataNascimento = "1999-10-07";
let idade = calcularIdade(dataNascimento);
console.log("Sua idade é " + idade);