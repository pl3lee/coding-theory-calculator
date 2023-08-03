import { Matrix } from "ml-matrix";

export const isZeroMatrix = (matrix) => {
  const zeroMatrix = new Matrix(matrix.rows, matrix.columns);
  return matrix.to1DArray().join("") === zeroMatrix.to1DArray().join("");
};
