import test from "node:test";
import assert from "node:assert";
import { modPositive } from "./modPositive.js";
import { Matrix } from "ml-matrix";

test("Simple test case", () => {
  const m1 = new Matrix([[1, 1, 1, 0, 1, 1, -1, 0, -1, 0]]);
  const actual = modPositive(m1, 3).to1DArray().join("");
  const expected = "1110112020";
  assert.strictEqual(actual, expected);
});

test("Test with negative values", () => {
  const m1 = new Matrix([
    [-1, 2, -3],
    [4, -5, 6],
    [-7, 8, -9],
  ]);
  const actual = modPositive(m1, 5).to2DArray();
  console.log(actual);
  const expected = [
    [4, 2, 2],
    [4, 0, 1],
    [3, 3, 1],
  ];
  assert.deepEqual(actual, expected);
});

test("Test with zero values", () => {
  const m1 = new Matrix([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const actual = modPositive(m1, 2).to2DArray();
  const expected = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  assert.deepStrictEqual(actual, expected);
});

test("Test with large values", () => {
  const m1 = new Matrix([
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900],
  ]);
  const actual = modPositive(m1, 1000).to2DArray();
  const expected = [
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900],
  ];
  assert.deepStrictEqual(actual, expected);
});
