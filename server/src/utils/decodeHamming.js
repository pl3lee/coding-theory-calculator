import { Matrix } from "ml-matrix";
import { findWeight } from "./findWeight.js";

export const decodeHamming = (pcm, word, modulo) => {
  const syndrome = pcm.mmul(word.transpose()).mod(modulo);
  const weight = findWeight(syndrome);
  if (weight === 0) {
    return word;
  } else {
    const syndromeString = syndrome.to1DArray().join("");
    for (let i = 0; i < pcm.columns; i++) {
      const column = pcm.getColumnVector(i);
      // console.log(`column ${i}`, column);
      for (let alpha = 1; alpha < modulo; alpha++) {
        if (
          syndromeString ===
          Matrix.mul(column, alpha).mod(modulo).to1DArray().join("")
        ) {
          const errorVector = Matrix.zeros(1, word.columns);
          errorVector.set(0, i, alpha);
          return Matrix.sub(word, errorVector).mod(modulo);
        }
      }
    }
    throw new Error("More than one error has occured. Rejected.");
  }
};

const pcm = new Matrix([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 1, 0, 0, 1, 1],
  [0, 0, 0, 1, 1, 1, 1],
]);

const word = new Matrix([[0, 1, 1, 1, 1, 1, 0]]);
const modulo = 2;
console.log(decodeHamming(pcm, word, modulo));
