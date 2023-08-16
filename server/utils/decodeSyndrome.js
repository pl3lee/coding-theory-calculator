import { Matrix } from "ml-matrix";
import { generateSyndromeCosetTable } from "./generateSyndromeCosetTable.js";
import { modPositive } from "./modPositive.js";

export const decodeSyndrome = (pcm, word, modulo) => {
  const syndromeTable = generateSyndromeCosetTable(pcm, modulo);
  const syndrome = modPositive(pcm.mmul(word.transpose()), modulo);
  const syndromeString = syndrome.to1DArray().join("");
  const cosetLeader = syndromeTable[syndromeString];
  return modPositive(Matrix.sub(word, cosetLeader), modulo);
};
