import { decodeSyndrome } from "./decodeSyndrome";
import { Matrix } from "ml-matrix";

describe("decodeSyndrome", () => {
  test("Simple test 1", () => {
    const pcm = new Matrix([
      [1, 1, 1, 0, 0],
      [1, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ]);
    const word = new Matrix([[1, 0, 1, 1, 1]]);
    const actual = decodeSyndrome(pcm, word, 2).to1DArray();
    const expected = [1, 0, 1, 1, 1];
    expect(actual).toStrictEqual(expected);
  });

  test("Simple test 2", () => {
    const pcm = new Matrix([
      [1, 1, 1, 0, 0],
      [1, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ]);
    const word = new Matrix([[1, 1, 0, 1, 1]]);
    const actual = decodeSyndrome(pcm, word, 2).to1DArray();
    const expected = [1, 1, 0, 0, 1];
    expect(actual).toStrictEqual(expected);
  });

  test("Simple test 3", () => {
    const pcm = new Matrix([
      [1, 0, 0, 1, 0, 1],
      [0, 1, 0, 1, 1, 0],
      [0, 0, 1, 0, 1, 1],
    ]);
    const word = new Matrix([[1, 0, 0, 0, 1, 1]]);
    const actual = decodeSyndrome(pcm, word, 2).to1DArray();
    const expected = [1, 1, 0, 0, 1, 1];
    expect(actual).toStrictEqual(expected);
  });

  test("Simple test 4", () => {
    const pcm = new Matrix([
      [1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
      [0, 0, 1, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
    ]);
    const word = new Matrix([[0, 1, 0, 0, 1, 1, 0, 0, 1, 0]]);
    const actual = decodeSyndrome(pcm, word, 2).to1DArray();
    const expected = [0, 1, 0, 0, 1, 1, 0, 0, 0, 0];
    expect(actual).toStrictEqual(expected);
  });
});