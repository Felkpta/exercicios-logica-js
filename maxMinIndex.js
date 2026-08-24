/**
 * Desafio 2: Dado um array numérico qualquer sem valores repetidos,
 * descubra qual é o índice do maior valor e o índice do menor valor.
 */

function encontrarIndicesMaxMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("O array não pode ser vazio.");
  }

  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[indiceMaior]) {
      indiceMaior = i;
    }
    if (arr[i] < arr[indiceMenor]) {
      indiceMenor = i;
    }
  }

  return {
    indiceMaior,
    valorMaior: arr[indiceMaior],
    indiceMenor,
    valorMenor: arr[indiceMenor],
  };
}

// Exemplo de uso
const numeros = [4, 17, 2, 9, 23, 1, 8];
const resultado = encontrarIndicesMaxMin(numeros);

console.log(
  `Maior valor: ${resultado.valorMaior} (índice ${resultado.indiceMaior})`
);
console.log(
  `Menor valor: ${resultado.valorMenor} (índice ${resultado.indiceMenor})`
);

module.exports = encontrarIndicesMaxMin;
