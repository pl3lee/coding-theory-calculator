import { decodeHamming } from "./decodeHamming";
import { Matrix } from "ml-matrix";

describe("decodeHamming", () => {
  test("Simple test 1", () => {
    const pcm = new Matrix([
      [1, 0, 0, 1, 1, 0],
      [0, 1, 0, 1, 1, 1],
      [0, 0, 1, 0, 1, 1],
    ]);

    const word = new Matrix([[1, 1, 0, 1, 1, 0]]);

    const actual = decodeHamming(pcm, word, 2).to1DArray();
    const expected = [1, 1, 0, 1, 0, 0];
    expect(actual).toStrictEqual(expected);
  });

  test("Modulo 5", () => {
    const pcm = new Matrix([
      [1, 0, 0, 2, 4, 1, 0],
      [0, 2, 0, 1, 0, 2, 2],
      [0, 0, 3, 1, 4, 1, 2],
    ]);

    const word = new Matrix([[4, 4, 3, 3, 0, 1, 0]]);

    const actual = decodeHamming(pcm, word, 5).to1DArray();
    const expected = [4, 4, 3, 0, 0, 1, 0];
    console.log(actual);
    console.log(expected);
    expect(actual).toStrictEqual(expected);
  });

  test("Modulo 2", () => {
    const pcm = new Matrix([
      [1, 0, 1, 0, 1, 0, 1],
      [0, 1, 1, 0, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 1],
    ]);

    const word = new Matrix([[0, 1, 1, 1, 1, 1, 0]]);

    const actual = decodeHamming(pcm, word, 2).to1DArray();
    const expected = [0, 1, 1, 1, 1, 0, 0];
    expect(actual).toStrictEqual(expected);
  });
});