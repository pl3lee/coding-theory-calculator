"use client";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
const ChangeDim = ({
  dim,
  addDim,
  removeDim,
  name,
}: {
  dim: number;
  addDim: () => void;
  removeDim: () => void;
  name: string;
}) => {
  return (
    <div className="flex flex-row lg:flex-row gap-2">
      <div className="flex flex-col justify-center">
        <div className="text-sm text-gray-300">{name}</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="text-right text-lg">{dim}</div>
        <div className="flex flex-col gap-2 justify-center">
          <button onClick={addDim}>
            <AiOutlineArrowUp />
          </button>
          <button onClick={removeDim}>
            <AiOutlineArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeDim;
