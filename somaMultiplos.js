/**
 * Desafio 3: Listando todos os números inteiros abaixo de 10 que são
 * múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. A soma desses múltiplos
 * é 23. Crie uma função que retorne a soma de todos os múltiplos de
 * 5 ou 7 abaixo de 1000.
 */

function somaMultiplos(limite, m1, m2) {
  let soma = 0;

  for (let i = 1; i < limite; i++) {
    if (i % m1 === 0 || i % m2 === 0) {
      soma += i;
    }
  }

  return soma;
}

// Validação com o exemplo dado no enunciado (múltiplos de 3 ou 5 abaixo de 10 = 23)
console.log(somaMultiplos(10, 3, 5)); // 23

// Resposta do desafio: múltiplos de 5 ou 7 abaixo de 1000
console.log(somaMultiplos(1000, 5, 7));

module.exports = somaMultiplos;
