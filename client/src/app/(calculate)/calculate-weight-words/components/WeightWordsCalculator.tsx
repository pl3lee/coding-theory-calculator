"use client";
import Calculator from "@/components/Calculator";
import { useState, useEffect } from "react";
import WordsInput from "@/components/WordsInput";
import axios from "axios";
import { backendURL } from "@/backendURL";
import { useDelayFetch } from "@/app/hooks/useDelayFetch";

const WeightWordsCalculator = () => {
  const [words, setWords] = useState<number[][]>([[0, 0]]);
  const [result, setResult] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(`${backendURL}/calculate/weight/words`, {
        words,
      })
      .then((res) => setResult(res.data.weight))
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useDelayFetch([words], handleSubmit);

  return (
    <Calculator
      resultName="Weight (Words)"
      results={{ result, loading, error }}
      calculatorItems={[
        {
          item: (
            <WordsInput words={words} setWords={setWords} minimumWords={1} />
          ),
          itemName: "Words",
        },
      ]}
    />
  );
};

export default WeightWordsCalculator;
