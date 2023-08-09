"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendURL } from "@/backendURL";
import Decoder from "@/components/Decoder";
import useDecode from "../../hooks/useDecode";

const DecodeHammingCalculator = () => {
  const { decodeResults, modulo, setModulo, pcm, setPcm, word, setWord } =
    useDecode({
      initialPcm: [
        [0, 0],
        [0, 0],
      ],
      initialWord: [[0, 0]],
      initialModulo: 2,
      endpoint: "/decode/hamming",
    });
  return (
    <Decoder
      decodeResults={decodeResults}
      modulo={modulo}
      setModulo={setModulo}
      pcm={pcm}
      setPcm={setPcm}
      word={word}
      setWord={setWord}
    />
  );
};

export default DecodeHammingCalculator;
