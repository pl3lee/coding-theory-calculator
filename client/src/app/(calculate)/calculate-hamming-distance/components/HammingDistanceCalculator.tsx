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

  return (
    <Calculator
      resultName="Hamming Distance"
      results={{ result, loading, error }}
      calculatorItems={[
        {
          item: <WordsInput words={words} setWords={setWords} />,
          itemName: "Words",
        },
      ]}
    />
  );
};

const WordsInput = ({
  words,
  setWords,
}: {
  words: number[][];
  setWords: React.Dispatch<React.SetStateAction<number[][]>>;
}) => {
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

  const handleChangeWord = (word: number[], index: number) => {
    const newWords: number[][] = [...words];
    newWords[index] = word;
    setWords(newWords);
  };

  return (
    <div className="flex flex-col items-center">
      <ChangeDim
        dim={words.length}
        addDim={handleAddWord}
        removeDim={handleRemoveWord}
        name="Number of Words"
      />
      <ChangeDim
        dim={words[0].length}
        addDim={handleAddCol}
        removeDim={handleRemoveCol}
        name="Word Length"
      />
      {words.map((word, index) => {
        return (
          <div className="flex flex-row items-center" key={index}>
            <WordInput
              word={word}
              setWord={(word) => handleChangeWord(word, index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HammingDistanceCalculator;
