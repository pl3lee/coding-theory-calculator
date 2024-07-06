import { Matrix } from "ml-matrix";
import { generateWords } from "./generateWords";
import { findWeight } from "./findWeight";
import { modPositive } from "./modPositive";

export const generateSyndromeCosetTable = (pcm: Matrix, modulo: number, str: boolean) => {
  const rows = pcm.rows;
  const columns = pcm.columns;
  const syndromes = generateWords(rows, modulo);
  const potentialCosetLeaders = generateWords(columns, modulo);
  potentialCosetLeaders.sort(sortByWeight);
  const syndromeCosetTable: { [key: string]: Matrix | string } = {};
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

const sortByWeight = (a: Matrix, b: Matrix) => {
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
