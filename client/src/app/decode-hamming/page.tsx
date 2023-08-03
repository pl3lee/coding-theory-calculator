"use client";
import { useEffect, useState } from "react";
import { Matrix } from "ml-matrix";
const DecodeHamming = () => {
  const [pcm, setPcm] = useState("");
  return (
    <div className="w-full">
      <h1>Decode Hamming</h1>
      <MatrixInput
        rows={5}
        cols={5}
        data={[
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16],
          [17, 18, 19, 20000],
        ]}
      />
    </div>
  );
};

const MatrixInput = ({
  rows,
  cols,
  data,
}: {
  rows: number;
  cols: number;
  data: number[][];
}) => {
  const [matrix, setMatrix] = useState<number[][]>([]);
  const dataRows = data.length;
  const dataCols = data[0].length;
  const rowClasses = `grid-rows-${rows}`;
  const colClasses = `grid-cols-${cols}`;

  useEffect(() => {
    const newMatrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
      const newRow: number[] = [];
      for (let j = 0; j < cols; j++) {
        if (i < dataRows && j < dataCols) {
          newRow.push(data[i][j]);
        } else {
          newRow.push(0);
        }
      }
      newMatrix.push(newRow);
    }
    console.log(newMatrix);
    setMatrix(newMatrix);
  }, []);

  return (
    <div
      className={`grid ${rowClasses} ${colClasses} w-fit max-w-[80vh] justify-center items-start gap-2`}
    >
      {matrix.map((row, i) => {
        return row.map((num, j) => {
          return (
            <input
              key={`${i}${j}`}
              type="number"
              value={num.toString()}
              className="w-12 h-12 overflow-x-auto border border-black flex justify-center text-center focus:outline-none rounded-sm"
              onChange={(e) =>
                setMatrix((prevMatrix) => {
                  const newMatrix = [...prevMatrix];
                  newMatrix[i][j] = Number(e.target.value);
                  return newMatrix;
                })
              }
            />
          );
        });
      })}
    </div>
  );
};

export default DecodeHamming;
