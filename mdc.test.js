const mdc = require("./mdc");

describe("mdc", () => {
  test("calcula o MDC de 48 e 18 corretamente", () => {
    expect(mdc(48, 18)).toBe(6);
  });

  test("calcula o MDC de 56 e 98 corretamente", () => {
    expect(mdc(56, 98)).toBe(14);
  });

  test("retorna 1 quando os números são primos entre si", () => {
    expect(mdc(17, 5)).toBe(1);
  });

  test("retorna o próprio número quando um dos valores é 0", () => {
    expect(mdc(10, 0)).toBe(10);
    expect(mdc(0, 7)).toBe(7);
  });

  test("funciona corretamente com números iguais", () => {
    expect(mdc(9, 9)).toBe(9);
  });

  test("lida corretamente com números negativos", () => {
    expect(mdc(-48, 18)).toBe(6);
  });
});
