import { isZeroMatrix } from "./isZeroMatrix";
import { Matrix } from "ml-matrix";

describe("isZeroMatrix", () => {
  test("Simple test case", () => {
    const m1 = new Matrix([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
    const actual = isZeroMatrix(m1);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("All zeros matrix", () => {
    const m1 = new Matrix([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    const actual = isZeroMatrix(m1);
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });

  test("Identity matrix", () => {
    const m1 = new Matrix([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);
    const actual = isZeroMatrix(m1);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("Single row matrix with non-zero values", () => {
    const m1 = new Matrix([[1, 2, 3]]);
    const actual = isZeroMatrix(m1);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("Single row matrix with all zeros", () => {
    const m1 = new Matrix([[0, 0, 0]]);
    const actual = isZeroMatrix(m1);
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });

  test("Single column matrix with non-zero values", () => {
    const m1 = new Matrix([[1], [2], [3]]);
    const actual = isZeroMatrix(m1);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("Single column matrix with all zeros", () => {
    const m1 = new Matrix([[0], [0], [0]]);
    const actual = isZeroMatrix(m1);
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });

  test("Non-square matrix with non-zero values", () => {
    const m1 = new Matrix([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    const actual = isZeroMatrix(m1);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("Non-square matrix with all zeros", () => {
    const m1 = new Matrix([
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
    const actual = isZeroMatrix(m1);
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });

  test("Matrix with one non-zero value", () => {
    const m1 = new Matrix([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
    const actual = isZeroMatrix(m1);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("Matrix with multiple non-zero values", () => {
    const m1 = new Matrix([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);
    const actual = isZeroMatrix(m1);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });
});