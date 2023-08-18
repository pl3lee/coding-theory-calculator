import { Matrix } from "ml-matrix";
import { generateSyndromeCosetTable } from "./generateSyndromeCosetTable.js";
import { modPositive } from "./modPositive.js";

// r is received vector
export const decodeSyndrome = (pcm, word, modulo) => {
  const syndromeTable = generateSyndromeCosetTable(pcm, modulo);
  const syndrome = modPositive(pcm.mmul(word.transpose()), modulo);
  const syndromeString = syndrome.to1DArray().join("");
  const cosetLeader = syndromeTable[syndromeString];
  return modPositive(Matrix.sub(word, cosetLeader), modulo);
};

// console.log(
//   decodeSyndrome(
//     new Matrix([
//       [1, 1, 1, 0, 0],
//       [1, 1, 0, 1, 0],
//       [1, 0, 0, 0, 1],
//     ]),
//     new Matrix([[1, 1, 0, 1, 1]]),
//     2
//   )
// );
