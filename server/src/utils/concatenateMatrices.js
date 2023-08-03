import { Matrix } from "ml-matrix";

// if axis = 0, then matrices are concatenated vertically
// if axis = 1, then matrices are concatenated horizontally
export const concatenateMatrices = (matrix1, matrix2, axis) => {
  let concatenatedMatrix;
  if (axis === 0) {
    if (matrix1.columns !== matrix2.columns)
      throw new Error(
        "Matrices must have the same number of columns to be concatenated vertically."
      );
    concatenatedMatrix = new Matrix(0, matrix1.columns);
    for (let i = 0; i < matrix1.rows; i++) {
      concatenatedMatrix.addRow(concatenatedMatrix.rows, matrix1.getRow(i));
    }
    for (let i = 0; i < matrix2.rows; i++) {
      concatenatedMatrix.addRow(concatenatedMatrix.rows, matrix2.getRow(i));
    }
  } else if (axis === 1) {
    if (matrix1.rows !== matrix2.rows)
      throw new Error(
        "Matrices must have the same number of rows to be concatenated horizontally."
      );
    concatenatedMatrix = new Matrix(matrix1.rows, 0);
    for (let i = 0; i < matrix1.columns; i++) {
      concatenatedMatrix.addColumn(
        concatenatedMatrix.columns,
        matrix1.getColumn(i)
      );
    }
    for (let i = 0; i < matrix2.columns; i++) {
      concatenatedMatrix.addColumn(
        concatenatedMatrix.columns,
        matrix2.getColumn(i)
      );
    }
  } else {
    throw new Error("Axis must be either 0 or 1.");
  }
  return concatenatedMatrix;
};

// const matrix1 = new Matrix([
//   [1, 2, 3],
//   [4, 5, 6],
// ]);
// const matrix2 = new Matrix([
//   [7, 8, 9],
//   [10, 11, 12],
// ]);
// const concatenatedMatrix = concatenateMatrices(matrix1, matrix2, 1);
// console.log(concatenatedMatrix);
