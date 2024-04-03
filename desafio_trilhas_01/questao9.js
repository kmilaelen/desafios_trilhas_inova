let pontosVida = 100;
let dano = 20;
let qtdAtaques = 3;

function ataque(vida , dano, qtdAtaques) {
  for (let i = 0; i < qtdAtaques; i++) {
    vida -= dano;
  }
  return vida;
}

let vidaFinal = ataque(pontosVida, dano, qtdAtaques);
console.log("Restarão " + vidaFinal+  "pontos de vida");