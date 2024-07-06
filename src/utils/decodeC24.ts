import { Matrix } from "ml-matrix";
import { concatenateMatrices } from "./concatenateMatrices";
import { isZeroMatrix } from "./isZeroMatrix";
import { findWeight } from "./findWeight";
import { hammingDistance } from "./hammingDistance";
import { modPositive } from "./modPositive";

const I12 = new Matrix([
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
]);
const B = new Matrix([
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
  [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
]);

const IB = concatenateMatrices(I12, B, 1);
const BI = concatenateMatrices(B, I12, 1);

export const decodeC24 = (word: Matrix) => {
  let e1 = new Matrix([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  let e2 = new Matrix([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  // first step
  const s1 = modPositive(IB.mmul(word.transpose()), 2); // s1 is a column vector
  if (isZeroMatrix(s1)) {
    console.log("s1 is zero, so we accept r without making any changes (A)");
    return word.to1DArray().join("");
  }
  // second step
  const ws1 = findWeight(s1);
  if (ws1 <= 3) {
    console.log("s1 has weight less than or equal to 3 (B)");
    e1 = s1.transpose();
    const e = concatenateMatrices(e1, e2, 1);
    return modPositive(Matrix.sub(word, e), 2).to1DArray().join("");
  }

  // third step
  for (let i = 0; i < B.rows; i++) {
    const transposedS1 = s1.transpose();
    const dist = hammingDistance(
      transposedS1.to1DArray().join(""),
      B.getRow(i).join("")
    );
    if (dist <= 2) {
      console.log(
        `s1 ${transposedS1.to1DArray().join("")} and row ${i} of B ${B.getRow(
          i
        )} have distance ${dist} (C).`
      );
      e2 = e2.set(0, i, 1);
      e1 = modPositive(Matrix.add(s1.transpose(), B.getRowVector(i)), 2);
      const e = concatenateMatrices(e1, e2, 1);
      return modPositive(Matrix.sub(word, e), 2).to1DArray().join("");
    }
  }

  // fourth step
  const s2 = modPositive(BI.mmul(word.transpose()), 2); // s2 is a column vector
  const ws2 = findWeight(s2);
  if (ws2 <= 3) {
    console.log("s2 has weight less than or equal to 3 (D)");
    e2 = s2.transpose();
    const e = concatenateMatrices(e1, e2, 1);
    return modPositive(Matrix.sub(word, e), 2).to1DArray().join("");
  }

  // fifth step
  for (let i = 0; i < B.rows; i++) {
    const transposedS2 = s2.transpose();
    // console.log(transposedS2.to1DArray().join(""));
    // console.log(B.getRow(i));
    const dist = hammingDistance(
      transposedS2.to1DArray().join(""),
      B.getRow(i).join("")
    );
    if (dist <= 2) {
      console.log(
        `s2 ${transposedS2.to1DArray().join("")} and row ${i} of B ${B.getRow(
          i
        )} have distance ${dist} (E).`
      );
      e1 = e1.set(0, i, 1);
      e2 = modPositive(Matrix.add(s2.transpose(), B.getRowVector(i)), 2);
      const e = concatenateMatrices(e1, e2, 1);
      return modPositive(Matrix.sub(word, e), 2).to1DArray().join("");
    }
  }
  console.log(
    "s2 differs in more than 2 positions for all rows of B, rejected"
  );
  throw new Error(
    "s2 differs in more than 2 positions for all rows of B, rejected"
  );
};
