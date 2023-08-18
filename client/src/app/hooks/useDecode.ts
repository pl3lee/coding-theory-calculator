"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { backendURL } from "@/backendURL";
import { useDelayFetch } from "./useDelayFetch";

const useDecode = ({initialPcm, initialWord, initialModulo, endpoint}: {initialPcm: number[][], initialWord: number[][], initialModulo: number, endpoint: string}) => {
  const [pcm, setPcm] = useState<number[][]>(initialPcm);
  // word must have length the same as pcm cols
  const [word, setWord] = useState<number[][]>(initialWord);
  const [modulo, setModulo] = useState<number>(initialModulo);
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
  

  const handleSubmit = () => {
    setDecodeResults({
      decodedWord: "",
      loading: true,
      error: false,
    });
    axios
      .post(`${backendURL}${endpoint}`, {
        word,
        pcm,
        modulo
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

  useDelayFetch([pcm, word, modulo], handleSubmit)
  return {
    pcm,
    setPcm,
    word,
    setWord,
    modulo,
    setModulo,
    decodeResults,
  }
}

export default useDecode;