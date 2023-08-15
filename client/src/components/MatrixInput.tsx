"use client";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import ChangeDim from "./ChangeDim";

const MatrixInput = ({
  data,
  setData,
  showRow = true,
  showCol = true,
}: {
  data: number[][];
  setData: React.Dispatch<React.SetStateAction<number[][]>>;
  showRow?: boolean;
  showCol?: boolean;
}) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${data[0].length}, 1fr)`,
    gridTemplateRows: `repeat(${data.length}, 1fr)`,
  };

  const handleAddRow = () => {
    const newRow = [];
    for (let i = 0; i < data[0].length; i++) {
      newRow.push(0);
    }
    const newMatrix: number[][] = [...data, newRow];
    setData(newMatrix);
  };

  const handleRemoveRow = () => {
    if (data.length === 2) return;
    const newMatrix: number[][] = [...data];
    newMatrix.pop();
    setData(newMatrix);
  };

  const handleAddCol = () => {
    const newMatrix: number[][] = [];
    for (let i = 0; i < data.length; i++) {
      const newRow: number[] = [...data[i], 0];
      newMatrix.push(newRow);
    }
    setData(newMatrix);
  };

  const handleRemoveCol = () => {
    if (data[0].length === 2) return;
    const newMatrix: number[][] = [];
    for (let i = 0; i < data.length; i++) {
      const newRow: number[] = [...data[i]];
      newRow.pop();
      newMatrix.push(newRow);
    }
    setData(newMatrix);
  };

  return (
    <div className="flex flex-col gap-3 items-center w-[300px] md:w-[500px] lg:w-full">
      <div className="flex gap-2 justify-between w-full text-xl items-start flex-col lg:flex-row">
        <div className="flex flex-col gap-0 lg:gap-2 items-start lg:items-end lg:order-last">
          {showRow && (
            <ChangeDim
              dim={data.length}
              addDim={handleAddRow}
              removeDim={handleRemoveRow}
              name="Rows"
            />
          )}
          {showCol && (
            <ChangeDim
              dim={data[0].length}
              addDim={handleAddCol}
              removeDim={handleRemoveCol}
              name="Columns"
            />
          )}
        </div>
        <div
          className="p-1 relative max-w-full overflow-auto"
          style={{
            background: `linear-gradient(to right, white 0 calc(20px), #111827 calc(20px) calc(100% - 20px), white calc(100% - 20px) 100%)`,
          }}
        >
          <div
            className={`grid max-w-full items-start gap-0 overflow-auto bg-[#111827] p-2 `}
            style={{
              ...gridStyle,
            }}
          >
            {data.map((row, i) => {
              return row.map((num, j) => {
                return (
                  <input
                    key={`${i}${j}`}
                    type="number"
                    value={num.toString()}
                    className="w-7 h-10 overflow-x-auto flex justify-center text-center focus:outline-none bg-gray-900 text-xl"
                    onChange={(e) =>
                      setData((prevMatrix: number[][]) => {
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
        </div>
      </div>
    </div>
  );
};

export default MatrixInput;
