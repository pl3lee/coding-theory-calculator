"use client";
import { useEffect, useState } from "react";
import { Matrix } from "ml-matrix";
import MatrixInput from "@/components/MatrixInput";
import Definition from "@/components/Definition";

import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import Algorithm from "@/components/Algorithm";

const DecodeHamming = () => {
  const [pcm, setPcm] = useState<number[][]>([
    [0, 0],
    [0, 0],
  ]);
  const [rows, setRows] = useState<number>(2);
  const [cols, setCols] = useState<number>(2);

  return (
    <div className="w-full flex justify-center items-start">
      <div className="p-5 flex flex-col items-center gap-5 max-w-screen-xl">
        <h1 className="w-full flex justify-center text-5xl font-bold">
          Decoding Hamming Codes
        </h1>
        <Definition
          name="Hamming Code"
          text={`A Hamming code of order $$r$$ over $$F = GF(q)$$ is an $$(n,k)$$-code over $$F$$ with $$n = \\frac{q^r - 1}{q - 1}$$ and $$k = n - r$$, and with $$PCM$$ $$H_r$$, an $$r \\times n$$ matrix whose columns are scalar multiples of each other.`}
        />
        <Definition
          name="Error Vector"
          text={`Suppose $$c \\in C$$ is sent and $$r \\in V_n(F)$$ is received. The error vector is $$e = r - c$$.`}
        />
        <Algorithm
          name="Decoding Algorithm for Single-Error Correcting Codes (Hamming Codes)"
          input="PCM $$H$$ and a received word $$r \in V_n(F)$$."
          steps={[
            "Compute $$s = Hr^T$$",
            "If $$s = 0$$, then accept $$r$$ as the transmitted word (so $$e = 0$$); STOP",
            "Compare $$s$$ with the columns of $$H$$. If $$s = \\alpha h_i$$ for some $$i$$, then set $$e = (0, \\ldots 0)$$",
          ]}
        />

        <MatrixInput data={pcm} setData={setPcm} />
      </div>
    </div>
  );
};

export default DecodeHamming;
