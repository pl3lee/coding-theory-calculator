import { hammingDistance } from "./hammingDistance";
import Matrix from "ml-matrix";

describe("hammingDistance", () => {
  test("Simple test case", () => {
    const words = [
      [0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
    ];
    const actual = hammingDistance(...words);
    const expected = 2;
    expect(actual).toStrictEqual(expected);
  });

  test("Empty input", () => {
    const words: number[][] = [];
    expect(() => {
      hammingDistance(...words);
    }).toThrow("At least two words are required to calculate Hamming distance.");
  });

  test("Single word input", () => {
    const words = [[0, 1, 0, 1, 0]];
    expect(() => {
      hammingDistance(...words);
    }).toThrow("At least two words are required to calculate Hamming distance.");
  });

  test("Two identical words", () => {
    const words = [
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
    ];
    const actual = hammingDistance(...words);
    const expected = 0;
    expect(actual).toStrictEqual(expected);
  });

  test("Two different words", () => {
    const words = [
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
    ];
    const actual = hammingDistance(...words);
    const expected = 5;
    expect(actual).toStrictEqual(expected);
  });

  test("Multiple words with different distances", () => {
    const words = [
      [0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 0, 1, 0],
    ];
    const actual = hammingDistance(...words);
    const expected = 2;
    expect(actual).toStrictEqual(expected);
  });
});