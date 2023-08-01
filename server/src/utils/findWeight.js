import { Matrix } from "ml-matrix";

export const findWeight = (word) => {
  let weight = 0;
  for (let i = 0; i < word.columns; i++) {
    const col = word.getColumn(i);
    for (let j = 0; j < col.length; j++) {
      if (col[j] != 0) {
        weight++;
      }
    }
  }
  return weight;
};
