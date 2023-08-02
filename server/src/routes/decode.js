import express from "express";
import { Matrix } from "ml-matrix";
import { decodeHamming } from "../utils/decodeHamming.js";

const router = express.Router();

router.post("/hamming", (req, res) => {
  const { pcm, word, modulo } = req.body;
  try {
    const pcmMatrix = new Matrix(pcm);
    const wordMatrix = new Matrix(word);
    const decoded = decodeHamming(pcmMatrix, wordMatrix, modulo);
    res.json({ codeword: decoded.to1DArray() });
  } catch {
    res.status(400).json({ error: "Invalid input or word is rejected." });
  }
});

export { router as decodeRouter };
