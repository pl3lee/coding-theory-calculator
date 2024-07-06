import { Matrix } from "ml-matrix";
import { generateSyndromeCosetTable } from "./generateSyndromeCosetTable";
import { modPositive } from "./modPositive";

export const decodeSyndrome = (pcm: Matrix, word: Matrix, modulo: number) => {
  const syndromeTable = generateSyndromeCosetTable(pcm, modulo, false);
  const syndrome = modPositive(pcm.mmul(word.transpose()), modulo);
  const syndromeString = syndrome.to1DArray().join("");
  const cosetLeader = syndromeTable[syndromeString];
  return modPositive(Matrix.sub(word, cosetLeader as Matrix), modulo);
};
