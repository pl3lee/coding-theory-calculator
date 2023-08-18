import test from "node:test";
import assert from "node:assert";
import { findWeightGM } from "./findWeightGM.js";
import { Matrix } from "ml-matrix";

test("Simple test case", () => {
  const actual = findWeightGM(
    new Matrix([
      [2, 0, 2, 1, 0],
      [1, 1, 0, 0, 1],
    ]),
    3
  );

  const expected = 3;
  assert.deepStrictEqual(actual, expected);
});

test("Simple test case 2", () => {
  const actual = findWeightGM(
    new Matrix([
      [1, 0, 0, 1, 0],
      [0, 1, 0, 1, 1],
      [0, 0, 1, 0, 1],
    ]),
    2
  );

  const expected = 2;
  assert.deepStrictEqual(actual, expected);
});
