"use client";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const MatrixInput = ({
  data,
  setData,
}: {
  data: number[][];
  setData: (data: number[][]) => void;
}) => {
  const rowClasses = `grid-rows-${data.length}`;
  const colClasses = `grid-cols-${data[0].length}`;

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
    <div className="flex flex-col gap-3 items-center w-full">
      <ul className="flex gap-2 text-lg flex-col">
        <li className="flex gap-2 justify-between">
          <div className="flex justify-start items-center">Rows:</div>
          <div className="flex justify-end gap-2">
            <input
              type="number"
              value={data.length}
              onChange={(e) => {
                const difference = Number(e.target.value) - data.length;
                if (difference > 0) {
                  for (let i = 0; i < difference; i++) {
                    handleAddRow();
                  }
                } else if (difference < 0) {
                  for (let i = 0; i < Math.abs(difference); i++) {
                    handleRemoveRow();
                  }
                }
              }}
              className="focus:outline-none w-[100px] text-right overflow-auto"
            />
            <div className="flex flex-col">
              <button onClick={handleAddRow} className="focus:outline-none">
                <AiOutlineArrowUp />
              </button>
              <button onClick={handleRemoveRow} className="focus:outline-none">
                <AiOutlineArrowDown />
              </button>
            </div>
          </div>
        </li>
        <li className="flex gap-2 justify-between">
          <div className="flex justify-start items-center">Columns:</div>
          <div className="flex justify-end gap-2">
            <input
              type="number"
              value={data[0].length}
              onChange={(e) => {
                const difference = Number(e.target.value) - data[0].length;
                if (difference > 0) {
                  for (let i = 0; i < difference; i++) {
                    handleAddCol();
                  }
                } else if (difference < 0) {
                  for (let i = 0; i < Math.abs(difference); i++) {
                    handleRemoveCol();
                  }
                }
              }}
              className="focus:outline-none w-[100px] text-right overflow-auto"
            />
            <div className="flex flex-col">
              <button onClick={handleAddCol} className="focus:outline-none">
                <AiOutlineArrowUp />
              </button>
              <button onClick={handleRemoveCol} className="focus:outline-none">
                <AiOutlineArrowDown />
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div
        className={`grid ${rowClasses} ${colClasses} w-fit max-w-[80vh] justify-center items-start gap-2 overflow-auto`}
      >
        {data.map((row, i) => {
          return row.map((num, j) => {
            return (
              <input
                key={`${i}${j}`}
                type="number"
                value={num.toString()}
                className="w-12 h-12 overflow-x-auto border border-black flex justify-center text-center focus:outline-none rounded-sm"
                onChange={(e) =>
                  setData((prevMatrix) => {
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
  );
};

export default MatrixInput;
