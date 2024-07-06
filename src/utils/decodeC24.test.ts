import { decodeC24 } from "./decodeC24";
import { Matrix } from "ml-matrix";

describe("decodeC24", () => {
  test("Simple test 1", () => {
    const word = new Matrix([
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    ]);

    const actual = decodeC24(word);
    const expected = [
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1,
    ].join("");
    expect(actual).toStrictEqual(expected);
  });

  test("Simple test 2", () => {
    const word = new Matrix([
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    ]);

    const actual = decodeC24(word);
    const expected = [
      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0,
    ].join("");
    expect(actual).toStrictEqual(expected);
  });

  test("Simple test 3", () => {
    const word = new Matrix([
      [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    ]);

    const actual = decodeC24(word);
    const expected = [
      0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1,
    ].join("");
    expect(actual).toStrictEqual(expected);
  });

  test("Simple test 4", () => {
    const word = new Matrix([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1],
    ]);

    const actual = decodeC24(word);
    const expected = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1,
    ].join("");
    expect(actual).toStrictEqual(expected);
  });

  test("Simple test 5", () => {
    const word = new Matrix([
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
    ]);

    const actual = decodeC24(word);
    const expected = [
      0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0,
    ].join("");
    expect(actual).toStrictEqual(expected);
  });

  test("Simple test 6", () => {
    const word = new Matrix([
      [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    ]);

    const actual = decodeC24(word);
    const expected = [
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1,
    ].join("");
    expect(actual).toStrictEqual(expected);
  });

  test("Simple test 7", () => {
    const word = new Matrix([
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    ]);

    const actual = decodeC24(word);
    const expected = [
      0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1,
    ].join("");
    expect(actual).toStrictEqual(expected);
  });
});
