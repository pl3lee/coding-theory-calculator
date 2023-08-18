import test from "node:test";
import assert from "node:assert";
import { findWeight } from "./findWeight.js";
import { Matrix } from "ml-matrix";

test("Single word", () => {
  const words = [new Matrix([[1, 0, 0]])];
  const actual = findWeight(...words);

  const expected = 1;
  assert.deepStrictEqual(actual, expected);
});

test("Multiple words with same weight", () => {
  const words = [new Matrix([[1, 0, 0]]), new Matrix([[1, 0, 0]])];
  const actual = findWeight(...words);

  const expected = 1;
  assert.deepStrictEqual(actual, expected);
});

test("Multiple words with different weights", () => {
  const words = [new Matrix([[1, 1, 1]]), new Matrix([[0, 1, 1]])];
  const actual = findWeight(...words);

  const expected = 2;
  assert.deepStrictEqual(actual, expected);
});

test("Empty input", () => {
  const words = [];
  assert.throws(
    () => {
      findWeight(...words);
    },
    Error,
    "Must have at least 1 word"
  );
});

test("Multiple words with a zero vector", () => {
  const words = [
    new Matrix([[0, 0, 0, 0, 0]]),
    new Matrix([[0, 1, 1, 1, 1]]),
    new Matrix([[0, 1, 1, 0, 0]]),
  ];
  const actual = findWeight(...words);

  const expected = 2;
  assert.deepStrictEqual(actual, expected);
});
