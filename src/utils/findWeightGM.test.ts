import { findWeightGM } from "./findWeightGM";
import { Matrix } from "ml-matrix";

describe("findWeightGM", () => {
  test("Simple test case", () => {
    const actual = findWeightGM(
      new Matrix([
        [2, 0, 2, 1, 0],
        [1, 1, 0, 0, 1],
      ]),
      3
    );

    const expected = 3;
    expect(actual).toStrictEqual(expected);
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
    expect(actual).toStrictEqual(expected);
  });
});