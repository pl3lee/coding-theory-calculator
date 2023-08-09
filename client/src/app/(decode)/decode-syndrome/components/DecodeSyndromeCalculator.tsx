"use client";
import Decoder from "@/components/Decoder";
import useDecode from "../../hooks/useDecode";

const DecodeSyndromeCalculator = () => {
  const { decodeResults, modulo, setModulo, pcm, setPcm, word, setWord } =
    useDecode({
      initialPcm: [
        [0, 0],
        [0, 0],
      ],
      initialWord: [[0, 0]],
      initialModulo: 2,
      endpoint: "/decode/syndrome",
    });
  return (
    <Decoder
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
