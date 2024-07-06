import { Matrix } from "ml-matrix";

export const modPositive = (matrix: Matrix, modulo: number) => {
  const rows = matrix.rows;
  const columns = matrix.columns;
  const modulod = Matrix.mod(matrix, modulo);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (modulod.get(i, j) < 0) {
        modulod.set(i, j, modulod.get(i, j) + modulo);
      }
    }
  }
  return modulod;
};
