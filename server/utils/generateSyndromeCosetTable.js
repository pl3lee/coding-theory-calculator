import { Matrix } from "ml-matrix";
import { generateWords } from "./generateWords.js";
import { findWeight } from "./findWeight.js";
import { modPositive } from "./modPositive.js";

export const generateSyndromeCosetTable = (pcm, modulo, str) => {
  const rows = pcm.rows;
  const columns = pcm.columns;
  const syndromes = generateWords(rows, modulo);
  const potentialCosetLeaders = generateWords(columns, modulo);
  potentialCosetLeaders.sort(sortByWeight);
  // console.log(potentialCosetLeaders);
  const syndromeCosetTable = {};
  potentialCosetLeaders.forEach((cosetLeader) => {
    const prod = modPositive(pcm.mmul(cosetLeader.transpose()), modulo);
    syndromes.forEach((syndrome) => {
      const syndromeString = syndrome.to1DArray().join("");
      const prodString = prod.to1DArray().join("");
      if (syndromeString === prodString) {
        if (!(syndromeString in syndromeCosetTable)) {
          syndromeCosetTable[syndromeString] = str
            ? cosetLeader.to1DArray().join("")
            : cosetLeader;
        }
      }
    });
  });
  return syndromeCosetTable;
};

const sortByWeight = (a, b) => {
  const aWeight = findWeight(a);
  const bWeight = findWeight(b);
  if (aWeight < bWeight) {
    return -1;
  } else if (aWeight > bWeight) {
    return 1;
  } else {
    return 0;
  }
};

// console.log(
//   generateSyndromeCosetTable(
//     new Matrix([
//       [1, 1, 1, 0, 0],
//       [1, 1, 0, 1, 0],
//       [1, 0, 0, 0, 1],
//     ]),
//     2,
//     true
//   )
// );
