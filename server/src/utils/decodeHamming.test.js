const { Matrix } = require("ml-matrix");
const { decodeHamming } = require("./decodeHamming");

test("Test 1", () => {
  const pcm = new Matrix([
    [1, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 1],
  ]);

  const word = new Matrix([[1, 1, 0, 1, 0, 0]]);
  const modulo = 2;
  expect(decodeHamming(pcm, word, modulo)).toEqual(
    new Matrix([[1, 1, 0, 1, 0, 0]])
  );
});
