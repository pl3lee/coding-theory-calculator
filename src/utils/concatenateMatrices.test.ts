import { concatenateMatrices } from "./concatenateMatrices";
import { Matrix } from "ml-matrix";

describe("concatenateMatrices", () => {
  test("Horizontal", () => {
    const matrix1 = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    const matrix2 = new Matrix([
      [7, 8, 9],
      [10, 11, 12],
    ]);

    const actual = concatenateMatrices(matrix1, matrix2, 1).to2DArray();
    const expected = [
      [1, 2, 3, 7, 8, 9],
      [4, 5, 6, 10, 11, 12],
    ];
    expect(actual).toStrictEqual(expected);
  });

  test("Vertical", () => {
    const matrix1 = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    const matrix2 = new Matrix([
      [7, 8, 9],
      [10, 11, 12],
    ]);

    const actual = concatenateMatrices(matrix1, matrix2, 0).to2DArray();
    const expected = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    expect(actual).toStrictEqual(expected);
  });

  test("Horizontal with empty matrices", () => {
    const matrix1 = new Matrix([]);
    const matrix2 = new Matrix([]);

    const actual = concatenateMatrices(matrix1, matrix2, 1).to2DArray();
    const expected: number[] = [];
    expect(actual).toStrictEqual(expected);
  });

  test("Vertical with empty matrices", () => {
    const matrix1 = new Matrix([]);
    const matrix2 = new Matrix([]);

    const actual = concatenateMatrices(matrix1, matrix2, 0).to2DArray();
    const expected: number[] = [];
    expect(actual).toStrictEqual(expected);
  });

  test("Horizontal with different number of rows", () => {
    const matrix1 = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    const matrix2 = new Matrix([
      [7, 8, 9],
      [10, 11, 12],
      [13, 14, 15],
    ]);

    expect(() => {
      concatenateMatrices(matrix1, matrix2, 1);
    }).toThrow('Matrices must have the same number of rows to be concatenated horizontally.');
  });

  test("Vertical with different number of columns", () => {
    const matrix1 = new Matrix([
      [1, 2],
      [4, 5],
    ]);
    const matrix2 = new Matrix([
      [7, 8, 9],
      [10, 11, 12],
    ]);

    expect(() => {
      concatenateMatrices(matrix1, matrix2, 0);
    }).toThrow('Matrices must have the same number of columns to be concatenated vertically.');
  });

  test("Axis not 0 or 1", () => {
    const matrix1 = new Matrix([]);
    const matrix2 = new Matrix([]);

    expect(() => {
      concatenateMatrices(matrix1, matrix2, 2);
    }).toThrow('Axis must be either 0 or 1.');
  });
})

