import test from "node:test";
import assert from "node:assert";
import { hammingDistance } from "./hammingDistance";
import Matrix from "ml-matrix";

test("Simple test case", () => {
  const words = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
  ];
  const actual = hammingDistance(...words);
  const expected = 2;
  assert.strictEqual(actual, expected);
});

test("Empty input", () => {
  const words: number[][] = [];
  assert.throws(
    () => {
      hammingDistance(...words);
    },
    Error,
    "At least two words are required to calculate Hamming distance."
  );
});

test("Single word input", () => {
  const words = [[0, 1, 0, 1, 0]];
  assert.throws(
    () => {
      hammingDistance(...words);
    },
    Error,
    "At least two words are required to calculate Hamming distance."
  );
});

test("Two identical words", () => {
  const words = [
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
  ];
  const actual = hammingDistance(...words);
  const expected = 0;
  assert.strictEqual(actual, expected);
});

test("Two different words", () => {
  const words = [
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
  ];
  const actual = hammingDistance(...words);
  const expected = 5;
  assert.strictEqual(actual, expected);
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
  assert.strictEqual(actual, expected);
});
