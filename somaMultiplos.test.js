const somaMultiplos = require("./somaMultiplos");

describe("somaMultiplos", () => {
  test("reproduz o exemplo do enunciado: múltiplos de 3 ou 5 abaixo de 10", () => {
    expect(somaMultiplos(10, 3, 5)).toBe(23);
  });

  test("calcula a soma dos múltiplos de 5 ou 7 abaixo de 1000", () => {
    expect(somaMultiplos(1000, 5, 7)).toBe(156361);
  });

  test("retorna 0 quando o limite é muito pequeno", () => {
    expect(somaMultiplos(1, 3, 5)).toBe(0);
    expect(somaMultiplos(3, 3, 5)).toBe(0);
  });

  test("não soma um múltiplo duas vezes quando ele é comum aos dois divisores", () => {
    expect(somaMultiplos(16, 3, 5)).toBe(3 + 5 + 6 + 9 + 10 + 12 + 15);
  });

  test("funciona com divisores iguais", () => {
    expect(somaMultiplos(11, 5, 5)).toBe(5 + 10);
  });
});
