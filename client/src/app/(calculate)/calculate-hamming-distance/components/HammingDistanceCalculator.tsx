"use client";
import Calculator from "@/components/Calculator";
import { useState, useEffect } from "react";
import MatrixInput from "@/components/MatrixInput";
import ChangeDim from "@/components/ChangeDim";
import WordInput from "@/components/WordInput";

const HammingDistanceCalculator = () => {
  const [words, setWords] = useState<number[][]>([
    [0, 0],
    [0, 0],
  ]);
  const [result, setResult] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleAddWord = () => {
    const newWord = [];
    for (let i = 0; i < words[0].length; i++) {
      newWord.push(0);
    }
    const newWords: number[][] = [...words, newWord];
    setWords(newWords);
  };
  const handleRemoveWord = () => {
    if (words.length === 2) return;
    const newWords: number[][] = [...words];
    newWords.pop();
    setWords(newWords);
  };
  const handleAddCol = () => {
    const newWords: number[][] = [];
    for (let i = 0; i < words.length; i++) {
      const newWord: number[] = [...words[i], 0];
      newWords.push(newWord);
    }
    setWords(newWords);
  };

  const handleRemoveCol = () => {
    if (words[0].length === 1) return;
    const newWords: number[][] = [];
    for (let i = 0; i < words.length; i++) {
      const newWord: number[] = [...words[i]];
      newWord.pop();
      newWords.push(newWord);
    }
    setWords(newWords);
  };

  return (
    <Calculator
      resultName="Hamming Distance"
      results={{ result, loading, error }}
      calculatorItems={[
        {
          item: <WordInput word={[words[0]]} setWord={setWords} />,
          itemName: "Words",
        },
      ]}
    />
  );
};

export default HammingDistanceCalculator;
