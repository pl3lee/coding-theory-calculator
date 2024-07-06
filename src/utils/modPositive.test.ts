import { modPositive } from "./modPositive";
import { Matrix } from "ml-matrix";


describe("modPositive", () => {
  test("Simple test case", () => {
    const m1 = new Matrix([[1, 1, 1, 0, 1, 1, -1, 0, -1, 0]]);
    const actual = modPositive(m1, 3).to1DArray().join("");
    const expected = "1110112020";
    expect(JSON.parse(JSON.stringify(actual))).toStrictEqual(expected);
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
    expect(JSON.parse(JSON.stringify(actual))).toStrictEqual(expected);
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
    expect(JSON.parse(JSON.stringify(actual))).toEqual(expected);
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
    expect(JSON.parse(JSON.stringify(actual))).toEqual(expected);
  });
});