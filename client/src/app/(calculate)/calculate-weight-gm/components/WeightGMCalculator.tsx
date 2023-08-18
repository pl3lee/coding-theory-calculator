"use client";
import Calculator from "@/components/Calculator";
import { useState, useEffect } from "react";
import WordsInput from "@/components/WordsInput";
import axios from "axios";
import { backendURL } from "@/backendURL";
import { useDelayFetch } from "@/app/hooks/useDelayFetch";
import MatrixInput from "@/components/MatrixInput";

const WeightGMCalculator = () => {
  const [gm, setGm] = useState<number[][]>([[0, 0]]);
  const [modulo, setModulo] = useState<number>(2);
  const [result, setResult] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(`${backendURL}/calculate/weight/gm`, {
        gm,
        modulo,
      })
      .then((res) => setResult(res.data.weight))
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useDelayFetch([gm, modulo], handleSubmit);

  return (
    <Calculator
      resultName="Weight (Linear Code)"
      results={{ result, loading, error }}
      calculatorItems={[
        {
          item: <MatrixInput data={gm} setData={setGm} />,
          itemName: "Generator Matrix",
        },
      ]}
      showModulo={true}
      modulo={modulo}
      setModulo={setModulo}
    />
  );
};

export default WeightGMCalculator;
