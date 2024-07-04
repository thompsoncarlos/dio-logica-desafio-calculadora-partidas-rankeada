const readlineSync = require('readline-sync');

function calcularRank(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;

  let nivel;
  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return {
    saldoVitorias: saldoVitorias,
    nivel: nivel
  }
}

function main() {
  let vitorias = parseInt(readlineSync.question("Digite o numero de vitorias: "));
  let derrotas = parseInt(readlineSync.question("Digite o numero de derrotas: "));

  let resultado = calcularRank(vitorias, derrotas);

  console.log("O Heroi tem saldo de " + resultado.saldoVitorias + " e esta no nivel: " + resultado.nivel);
}

main();