import test from "node:test";
import assert from "node:assert";
import { concatenateMatrices } from "./concatenateMatrices";
import { Matrix } from "ml-matrix";

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
  assert.deepStrictEqual(actual, expected);
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
  assert.deepStrictEqual(actual, expected);
});

test("Horizontal with empty matrices", () => {
  const matrix1 = new Matrix([]);
  const matrix2 = new Matrix([]);

  const actual = concatenateMatrices(matrix1, matrix2, 1).to2DArray();
  const expected: number[] = [];
  assert.deepStrictEqual(actual, expected);
});

test("Vertical with empty matrices", () => {
  const matrix1 = new Matrix([]);
  const matrix2 = new Matrix([]);

  const actual = concatenateMatrices(matrix1, matrix2, 0).to2DArray();
  const expected: number[] = [];
  assert.deepStrictEqual(actual, expected);
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

  assert.throws(() => {
    concatenateMatrices(matrix1, matrix2, 1);
  }, /Matrices must have the same number of rows to be concatenated horizontally./);
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

  assert.throws(() => {
    concatenateMatrices(matrix1, matrix2, 0);
  }, /Matrices must have the same number of columns to be concatenated vertically./);
});

test("Axis not 0 or 1", () => {
  const matrix1 = new Matrix([]);
  const matrix2 = new Matrix([]);

  assert.throws(() => {
    concatenateMatrices(matrix1, matrix2, 2);
  }, /Axis must be either 0 or 1./);
});
