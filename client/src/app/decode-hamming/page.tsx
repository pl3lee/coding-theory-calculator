"use client";
import { useState } from "react";
const DecodeHamming = () => {
  const [pcm, setPcm] = useState("");
  return (
    <div>
      <h1>Decode Hamming</h1>
      <div className="grid"></div>
    </div>
  );
};

export default DecodeHamming;
