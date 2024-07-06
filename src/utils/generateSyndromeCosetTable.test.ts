import test from "node:test";
import assert from "node:assert";
import { generateSyndromeCosetTable } from "./generateSyndromeCosetTable";
import { Matrix } from "ml-matrix";

test("Simple test case", () => {
  const actual = generateSyndromeCosetTable(
    new Matrix([
      [1, 1, 1, 0, 0],
      [1, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ]),
    2,
    true
  );
  const expected = {
    100: "00100",
    101: "00101",
    110: "01000",
    111: "10000",
    "000": "00000",
    "001": "00001",
    "010": "00010",
    "011": "00011",
  };
  assert.deepStrictEqual(actual, expected);
});
