"use client";
import { useEffect, useState } from "react";
import { Matrix } from "ml-matrix";
import MatrixInput from "@/components/MatrixInput";
import Definition from "@/components/Definition";
import axios from "axios";
import { backendURL } from "@/backendURL";

import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import Algorithm from "@/components/Algorithm";

const DecodeHamming = () => {
  const [pcm, setPcm] = useState<number[][]>([
    [0, 0],
    [0, 0],
  ]);
  // word must have length the same as pcm cols
  const [word, setWord] = useState<number[][]>([[0, 0]]);
  const [modulo, setModulo] = useState<number>(2);

  useEffect(() => {
    if (pcm[0].length < word[0].length) {
      setWord(word.map((row) => row.slice(0, pcm[0].length)));
    } else if (pcm[0].length > word[0].length) {
      setWord(
        word.map((row) => {
          const newRow = [...row];
          while (newRow.length < pcm[0].length) {
            newRow.push(0);
          }
          return newRow;
        })
      );
    }
  }, [pcm]);

  const handleSubmit = () => {
    axios
      .post(`${backendURL}/decode/hamming`, {
        pcm,
        word,
        modulo,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full flex justify-center items-start p-2">
      <div className="p-5 flex flex-col items-center gap-5 max-w-screen-xl">
        <h1 className="w-full flex justify-center text-xl md:text-3xl lg:text-5xl font-bold">
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
            "Compare $$s$$ with the columns of $$H$$. If $$s = \\alpha h_i$$ for some $$i$$, then set $$e = (0, \\ldots, 0, \\alpha, 0, \\ldots, 0)$$ ($$\\alpha$$ at $$i$$th position), and decode to $$c = r - e$$; STOP",
            "Report that more than one error has occurred",
          ]}
        />
        <div className="flex flex-col gap-10 w-full">
          <h2 className="text-xl font-bold">1. Input PCM H</h2>
          <MatrixInput data={pcm} setData={setPcm} name="PCM" />
          <h2 className="text-xl font-bold">2. Input received word r</h2>
          <MatrixInput
            data={word}
            setData={setWord}
            showRow={false}
            showCol={false}
            name="Word"
          />
          <h2 className="text-xl font-bold">3. Input modulo</h2>
          <div className="flex gap-2">
            Modulo:{" "}
            <input
              type="number"
              onChange={(e) => {
                if (e.target.value === "") {
                  setModulo(2);
                } else {
                  setModulo(Number(e.target.value));
                }
              }}
            />
          </div>
          <button className="border" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DecodeHamming;
