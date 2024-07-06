import { addStringsModuloWithCarry } from "./addStringsModuloWithCarry";

describe("addStringsModuloWithCarry", () => {
  test("Simple test 1", () => {
    const actual = addStringsModuloWithCarry("1", "2", 10);
    const expected = "3";
    expect(actual).toBe(expected);
  });

  test("Simple test 2", () => {
    const actual = addStringsModuloWithCarry("1", "2", 3);
    const expected = "10";
    expect(actual).toBe(expected);
  });

  test("Adding two large numbers", () => {
    const actual = addStringsModuloWithCarry("123456789", "987654321", 10);
    const expected = "1111111110";
    expect(actual).toBe(expected);
  });

  test("Adding two numbers with different lengths", () => {
    const actual = addStringsModuloWithCarry("123", "4567", 10);
    const expected = "4690";
    expect(actual).toBe(expected);
  });

  test("Adding two numbers with carry", () => {
    const actual = addStringsModuloWithCarry("999", "1", 10);
    const expected = "1000";
    expect(actual).toBe(expected);
  });

  test("Adding two numbers with modulo", () => {
    const actual = addStringsModuloWithCarry("7", "5", 6);
    const expected = "20";
    expect(actual).toBe(expected);
  });

  test("Adding two numbers with modulo and carry", () => {
    const actual = addStringsModuloWithCarry("5", "5", 6);
    const expected = "14";
    expect(actual).toBe(expected);
  });
})



