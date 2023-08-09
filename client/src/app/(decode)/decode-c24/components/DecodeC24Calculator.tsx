"use client";
import Decoder from "@/components/Decoder";
import useDecode from "../../hooks/useDecode";

const DecodeC24Calculator = () => {
  const { decodeResults, modulo, setModulo, pcm, setPcm, word, setWord } =
    useDecode({
      initialPcm: [
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0,
        ],
      ],
      initialWord: [
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0,
        ],
      ],
      initialModulo: 2,
      endpoint: "/decode/c24",
    });
  return (
    <Decoder
      decodeResults={decodeResults}
      modulo={modulo}
      setModulo={setModulo}
      showModulo={false}
      pcm={pcm}
      setPcm={setPcm}
      showPCM={false}
      word={word}
      setWord={setWord}
    />
  );
};

export default DecodeC24Calculator;
