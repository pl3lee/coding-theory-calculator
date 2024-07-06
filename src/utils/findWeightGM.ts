import { findWeight } from "./findWeight";
import { Matrix } from "ml-matrix";
import { generateWords } from "./generateWords";
import { modPositive } from "./modPositive";

// finds the weight of a linear code given generator matrix.
export const findWeightGM = (gm: Matrix, modulo: number) => {
  const sourceCodes = generateWords(gm.rows, modulo);
  const codeWords = sourceCodes.map((sourceCode) => {
    return modPositive(sourceCode.mmul(gm), modulo);
  });
  const weight = findWeight(...codeWords);
  return weight;
};
