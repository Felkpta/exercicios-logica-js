/**
 * Desafio 1: Calcule o MDC (máximo divisor comum) entre dois números.
 *
 * Implementação usando o Algoritmo de Euclides.
 */

function mdc(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }

  return a;
}

// Exemplos de uso
console.log(mdc(48, 18)); // 6
console.log(mdc(56, 98)); // 14
console.log(mdc(17, 5));  // 1 (números primos entre si)

module.exports = mdc;
