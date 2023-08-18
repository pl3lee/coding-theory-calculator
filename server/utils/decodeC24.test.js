import test from "node:test";
import assert from "node:assert";
import { decodeC24 } from "./decodeC24.js";
import { Matrix } from "ml-matrix";

test("Simple test 1", () => {
  const word = new Matrix([
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
  ]);

  const actual = decodeC24(word);
  const expected = [
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1,
  ].join("");
  assert.deepStrictEqual(actual, expected);
});

test("Simple test 2", () => {
  const word = new Matrix([
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
  ]);

  const actual = decodeC24(word);
  const expected = [
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0,
  ].join("");
  assert.deepStrictEqual(actual, expected);
});

test("Simple test 3", () => {
  const word = new Matrix([
    [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
  ]);

  const actual = decodeC24(word);
  const expected = [
    0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1,
  ].join("");
  assert.deepStrictEqual(actual, expected);
});

test("Simple test 4", () => {
  const word = new Matrix([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1],
  ]);

  const actual = decodeC24(word);
  const expected = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1,
  ].join("");
  assert.deepStrictEqual(actual, expected);
});

test("Simple test 5", () => {
  const word = new Matrix([
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
  ]);

  const actual = decodeC24(word);
  const expected = [
    0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0,
  ].join("");
  assert.deepStrictEqual(actual, expected);
});

test("Simple test 6", () => {
  const word = new Matrix([
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
  ]);

  const actual = decodeC24(word);
  const expected = [
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1,
  ].join("");
  assert.deepStrictEqual(actual, expected);
});

test("Simple test 7", () => {
  const word = new Matrix([
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
  ]);

  const actual = decodeC24(word);
  const expected = [
    0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1,
  ].join("");
  assert.deepStrictEqual(actual, expected);
});
