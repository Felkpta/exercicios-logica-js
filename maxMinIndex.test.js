const encontrarIndicesMaxMin = require("./maxMinIndex");

describe("encontrarIndicesMaxMin", () => {
  test("encontra os índices corretos do maior e do menor valor", () => {
    const arr = [4, 17, 2, 9, 23, 1, 8];
    const resultado = encontrarIndicesMaxMin(arr);

    expect(resultado.indiceMaior).toBe(4);
    expect(resultado.valorMaior).toBe(23);
    expect(resultado.indiceMenor).toBe(5);
    expect(resultado.valorMenor).toBe(1);
  });

  test("funciona com array de um único elemento", () => {
    const resultado = encontrarIndicesMaxMin([42]);
    expect(resultado.indiceMaior).toBe(0);
    expect(resultado.indiceMenor).toBe(0);
  });

  test("funciona quando o maior valor está na primeira posição", () => {
    const resultado = encontrarIndicesMaxMin([100, 5, 3, 1]);
    expect(resultado.indiceMaior).toBe(0);
    expect(resultado.indiceMenor).toBe(3);
  });

  test("funciona com números negativos", () => {
    const resultado = encontrarIndicesMaxMin([-5, -1, -20, 3]);
    expect(resultado.indiceMaior).toBe(3);
    expect(resultado.indiceMenor).toBe(2);
  });

  test("lança um erro quando o array está vazio", () => {
    expect(() => encontrarIndicesMaxMin([])).toThrow();
  });

  test("lança um erro quando o argumento não é um array", () => {
    expect(() => encontrarIndicesMaxMin(null)).toThrow();
  });
});
