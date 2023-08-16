import { Matrix } from "ml-matrix";

const allZeros = (...words) => {
  let allZero = true;
  words.forEach((word) => {
    for (let i = 0; i < word.columns; i++) {
      const col = word.getColumn(i);
      for (let j = 0; j < col.length; j++) {
        if (col[j] != 0) {
          allZero = false;
          break;
        }
      }
    }
  });
  return allZero;
};

export const findWeight = (...words) => {
  console.log(`decoding ${words[0].to1DArray().join("")}`);
  let minWeight = Number.MAX_SAFE_INTEGER;
  words.forEach((word) => {
    let weight = 0;
    for (let i = 0; i < word.columns; i++) {
      const col = word.getColumn(i);
      for (let j = 0; j < col.length; j++) {
        if (col[j] != 0) {
          weight++;
        }
      }
    }
    if (allZeros(...words)) {
      minWeight = 0;
    } else if (words.length === 1) {
      minWeight = weight;
    } else {
      minWeight = weight != 0 ? Math.min(minWeight, weight) : minWeight;
    }
  });
  return minWeight;
};

// const words = ["010010000000"];
// const wordsMatrix = words.map(
//   (word) => new Matrix([word.split("").map((char) => parseInt(char))])
// );
// console.log(wordsMatrix);
// console.log(findWeight(...wordsMatrix));
