import { Matrix } from "ml-matrix";
import { findWeight } from "./findWeight.js";
import { modPositive } from "./modPositive.js";

export const decodeHamming = (pcm, word, modulo) => {
  const syndrome = modPositive(pcm.mmul(word.transpose()), modulo);
  const weight = findWeight(syndrome);
  if (weight === 0) {
    return word;
  } else {
    const syndromeString = syndrome.to1DArray().join("");
    for (let i = 0; i < pcm.columns; i++) {
      const column = pcm.getColumnVector(i);
      for (let alpha = 1; alpha < modulo; alpha++) {
        if (
          syndromeString ===
          modPositive(Matrix.mul(column, alpha), modulo).to1DArray().join("")
        ) {
          const errorVector = Matrix.zeros(1, word.columns);
          errorVector.set(0, i, alpha);
          return modPositive(Matrix.sub(word, errorVector), modulo);
        }
      }
    }
    throw new Error("More than one error has occured. Rejected.");
  }
};
