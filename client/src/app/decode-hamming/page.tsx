"use client";
import { useEffect, useState } from "react";
import { Matrix } from "ml-matrix";
import MatrixInput from "@/components/MatrixInput";
const DecodeHamming = () => {
  const [pcm, setPcm] = useState<number[][]>([
    [0, 0],
    [0, 0],
  ]);
  const [rows, setRows] = useState<number>(2);
  const [cols, setCols] = useState<number>(2);

  return (
    <div className="w-full p-5 flex flex-col items-center gap-5">
      <h1 className="w-full flex justify-center">Hamming Code Decode</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        omnis. Architecto consequatur, laboriosam, sequi alias odit consectetur
        iusto nulla nam laborum provident neque modi odio quidem atque sed harum
        quam.
      </p>
      <MatrixInput data={pcm} setData={setPcm} />
    </div>
  );
};

export default DecodeHamming;
