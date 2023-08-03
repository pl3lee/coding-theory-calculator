import { findWeight } from "./findWeight.js";
import { Matrix } from "ml-matrix";
import { generateWords } from "./generateWords.js";
import { modPositive } from "./modPositive.js";

// finds the weight of a linear code given generator matrix.
export const findWeightGM = (gm, modulo) => {
  const sourceCodes = generateWords(gm.rows, modulo);
  const codeWords = sourceCodes.map((sourceCode) => {
    return modPositive(sourceCode.mmul(gm), modulo);
  });
  const weight = findWeight(...codeWords);
  return weight;
};
