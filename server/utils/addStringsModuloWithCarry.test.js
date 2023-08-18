import test from "node:test";
import assert from "node:assert";
import { addStringsModuloWithCarry } from "./addStringsModuloWithCarry.js";

test("Simple test 1", () => {
  const actual = addStringsModuloWithCarry("1", "2", 10);
  const expected = "3";
  assert.deepStrictEqual(actual, expected);
});

test("Simple test 2", () => {
  const actual = addStringsModuloWithCarry("1", "2", 3);
  const expected = "10";
  assert.deepStrictEqual(actual, expected);
});

test("Adding two large numbers", () => {
  const actual = addStringsModuloWithCarry("123456789", "987654321", 10);
  const expected = "1111111110";
  assert.deepStrictEqual(actual, expected);
});

test("Adding two numbers with different lengths", () => {
  const actual = addStringsModuloWithCarry("123", "4567", 10);
  const expected = "4690";
  assert.deepStrictEqual(actual, expected);
});

test("Adding two numbers with carry", () => {
  const actual = addStringsModuloWithCarry("999", "1", 10);
  const expected = "1000";
  assert.deepStrictEqual(actual, expected);
});

test("Adding two numbers with modulo", () => {
  const actual = addStringsModuloWithCarry("7", "5", 6);
  const expected = "20";
  assert.deepStrictEqual(actual, expected);
});

test("Adding two numbers with modulo and carry", () => {
  const actual = addStringsModuloWithCarry("5", "5", 6);
  const expected = "14";
  assert.deepStrictEqual(actual, expected);
});
