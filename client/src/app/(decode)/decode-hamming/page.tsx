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
  const [decodeResults, setDecodeResults] = useState<any>({
    decodedWord: "",
    loading: false,
    error: false,
  });

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

  useEffect(() => {
    handleSubmit();
  }, [pcm, word, modulo]);

  const handleSubmit = () => {
    setDecodeResults({
      decodedWord: "",
      loading: true,
      error: false,
    });
    axios
      .post(`${backendURL}/decode/hamming`, {
        pcm,
        word,
        modulo,
      })
      .then((res) => {
        setDecodeResults({
          decodedWord: res.data.codeword,
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        setDecodeResults({
          decodedWord: "",
          loading: false,
          error: true,
        });
      });
  };

  return (
    <div className="w-full flex justify-center items-start p-2">
      <div className="p-5 flex flex-col items-center gap-5 max-w-screen-xl">
        <h1 className="w-full flex justify-center text-xl md:text-3xl lg:text-5xl font-bold">
          Decoding Hamming Codes
        </h1>
        <div>
          <Definition
            name="Hamming Code"
            text={`A Hamming code of order $$r$$ over $$F = GF(q)$$ is an $$(n,k)$$-code over $$F$$ with $$n = \\frac{q^r - 1}{q - 1}$$ and $$k = n - r$$, and with PCM $$H_r$$, an $$r \\times n$$ matrix whose columns are scalar multiples of each other.`}
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
        </div>

        <div className="flex flex-col gap-10 min-w-full max-w-screen-lg bg-gray-900 rounded-xl py-4 text-white">
          <div className="flex justify-between">
            <div className="flex flex-col px-10">
              <h3 className="text-gray-300 text-xl">Decoded Word</h3>
              <p className="text-white text-3xl font-bold">
                {decodeResults.error
                  ? "Word Rejected"
                  : decodeResults.loading
                  ? "Calculating..."
                  : decodeResults.decodedWord}
              </p>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col px-10">
                <h3 className="text-gray-300 text-xl">Modulo</h3>
                <input
                  type="number"
                  value={modulo}
                  className="focus:outline-none text-white bg-gray-900 w-12 h-12 flex justify-center items-center text-center text-3xl"
                  onChange={(e) => {
                    setModulo(Number(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>

          <div className="px-10 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h3 className="text-gray-300 text-xl">PCM H</h3>
              <MatrixInput data={pcm} setData={setPcm} name="PCM" />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-gray-300 text-xl">Received Word r</h3>
              <MatrixInput
                data={word}
                setData={setWord}
                showRow={false}
                showCol={false}
                name="Word"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecodeHamming;
