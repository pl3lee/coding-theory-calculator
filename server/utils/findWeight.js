import { Matrix } from "ml-matrix";

export const findWeight = (...words) => {
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
    if (words.length === 1) return weight;
    minWeight = weight != 0 ? Math.min(minWeight, weight) : minWeight;
  });
  return minWeight;
};

// const words = [
//   "00000",
//   "00110",
//   "01001",
//   "01111",
//   "10011",
//   "10101",
//   "11010",
//   "11100",
// ];
// const wordsMatrix = words.map(
//   (word) => new Matrix([word.split("").map((char) => parseInt(char))])
// );
// console.log(wordsMatrix);
