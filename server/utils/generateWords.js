import { Matrix } from "ml-matrix";
import { addStringsModuloWithCarry } from "./addStringsModuloWithCarry.js";

export const generateWords = (length, modulo) => {
  const zeroMatrix = [];
  for (let i = 0; i < length; i++) {
    zeroMatrix.push(0);
  }
  const zeroString = zeroMatrix.join("");
  const matrixWithOne = [...zeroMatrix];
  matrixWithOne[matrixWithOne.length - 1] = 1;

  const oneString = matrixWithOne.join("");

  const words = [zeroString];
  const numberOfWords = Math.pow(modulo, length);
  for (let i = 1; i < numberOfWords; i++) {
    const lastWord = words[words.length - 1];
    const newWord = addStringsModuloWithCarry(lastWord, oneString, modulo);
    words.push(newWord);
  }

  const wordsListString = words.map((word) => word.split(""));
  const wordsList = wordsListString.map((word) =>
    word.map((digit) => parseInt(digit, 10))
  );

  const wordsMatrix = wordsList.map((word) => new Matrix([word]));
  return wordsMatrix;
};
