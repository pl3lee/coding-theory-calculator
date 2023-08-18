"use client";
import Calculator from "@/components/Calculator";
import { useState, useEffect } from "react";
import WordsInput from "@/components/WordsInput";
import axios from "axios";
import { backendURL } from "@/backendURL";
import { useDelayFetch } from "@/app/hooks/useDelayFetch";

const HammingDistanceCalculator = () => {
  const [words, setWords] = useState<number[][]>([
    [0, 0],
    [0, 0],
  ]);
  const [result, setResult] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(`${backendURL}/calculate/hamming-distance`, {
        words,
      })
      .then((res) => setResult(res.data.hammingDistance))
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useDelayFetch([words], handleSubmit);

  return (
    <Calculator
      resultName="Hamming Distance"
      results={{ result, loading, error }}
      calculatorItems={[
        {
          item: (
            <WordsInput words={words} setWords={setWords} minimumWords={2} />
          ),
          itemName: "Words",
        },
      ]}
    />
  );
};

export default HammingDistanceCalculator;
