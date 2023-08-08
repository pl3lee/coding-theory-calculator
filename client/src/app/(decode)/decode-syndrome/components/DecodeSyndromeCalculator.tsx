"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendURL } from "@/backendURL";
import Calculator from "@/components/Calculator";

const DecodeSyndromeCalculator = () => {
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

  const [timeoutId, setTimeoutId] = useState<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      handleSubmit();
    }, 1000); // delay in milliseconds
    setTimeoutId(id);
  }, [pcm, word, modulo]);

  const handleSubmit = () => {
    setDecodeResults({
      decodedWord: "",
      loading: true,
      error: false,
    });
    axios
      .post(`${backendURL}/decode/syndrome`, {
        pcm,
        word,
        modulo,
      })
      .then((res) => {
        console.log(res.data);
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
    <Calculator
      decodeResults={decodeResults}
      modulo={modulo}
      setModulo={setModulo}
      showModulo={false}
      pcm={pcm}
      setPcm={setPcm}
      word={word}
      setWord={setWord}
    />
  );
};

export default DecodeSyndromeCalculator;
