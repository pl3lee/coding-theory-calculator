import { findWeight } from "./findWeight";
import { Matrix } from "ml-matrix";

describe("findWeight", () => {
  test("Single word", () => {
    const words = [new Matrix([[1, 0, 0]])];
    const actual = findWeight(...words);

    const expected = 1;
    expect(actual).toStrictEqual(expected);
  });

  test("Multiple words with same weight", () => {
    const words = [new Matrix([[1, 0, 0]]), new Matrix([[1, 0, 0]])];
    const actual = findWeight(...words);

    const expected = 1;
    expect(actual).toStrictEqual(expected);
  });

  test("Multiple words with different weights", () => {
    const words = [new Matrix([[1, 1, 1]]), new Matrix([[0, 1, 1]])];
    const actual = findWeight(...words);

    const expected = 2;
    expect(actual).toStrictEqual(expected);
  });

  test("Empty input", () => {
    const words: Matrix[] = [];
    expect(() => {
      findWeight(...words);
    }).toThrow("Must have at least 1 word");
  });

  test("Multiple words with a zero vector", () => {
    const words = [
      new Matrix([[0, 0, 0, 0, 0]]),
      new Matrix([[0, 1, 1, 1, 1]]),
      new Matrix([[0, 1, 1, 0, 0]]),
    ];
    const actual = findWeight(...words);

    const expected = 2;
    expect(actual).toStrictEqual(expected);
  });
});
