import { generateWords } from "./generateWords";
import { Matrix } from "ml-matrix";

describe("generateWords", () => {
  test("Simple test case", () => {
    const actualMatrixList = generateWords(2, 2);
    const actual = actualMatrixList.map((matrix) => matrix.to1DArray().join(""));
    const expectedMatrixList = [
      new Matrix([[0, 0]]),
      new Matrix([[0, 1]]),
      new Matrix([[1, 0]]),
      new Matrix([[1, 1]]),
    ];
    const expected = expectedMatrixList.map((matrix) =>
      matrix.to1DArray().join("")
    );
    expect(actual).toStrictEqual(expected);
  });

  test("Test case with length 3 and modulo 2", () => {
    const actualMatrixList = generateWords(3, 2);
    const actual = actualMatrixList.map((matrix) => matrix.to1DArray().join(""));
    const expectedMatrixList = [
      new Matrix([[0, 0, 0]]),
      new Matrix([[0, 0, 1]]),
      new Matrix([[0, 1, 0]]),
      new Matrix([[0, 1, 1]]),
      new Matrix([[1, 0, 0]]),
      new Matrix([[1, 0, 1]]),
      new Matrix([[1, 1, 0]]),
      new Matrix([[1, 1, 1]]),
    ];
    const expected = expectedMatrixList.map((matrix) =>
      matrix.to1DArray().join("")
    );
    expect(actual).toStrictEqual(expected);
  });

  test("Test case with length 2 and modulo 3", () => {
    const actualMatrixList = generateWords(2, 3);
    const actual = actualMatrixList.map((matrix) => matrix.to1DArray().join(""));
    const expectedMatrixList = [
      new Matrix([[0, 0]]),
      new Matrix([[0, 1]]),
      new Matrix([[0, 2]]),
      new Matrix([[1, 0]]),
      new Matrix([[1, 1]]),
      new Matrix([[1, 2]]),
      new Matrix([[2, 0]]),
      new Matrix([[2, 1]]),
      new Matrix([[2, 2]]),
    ];
    const expected = expectedMatrixList.map((matrix) =>
      matrix.to1DArray().join("")
    );
    expect(actual).toStrictEqual(expected);
  });
});