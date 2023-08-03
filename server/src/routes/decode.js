import express from "express";
import { Matrix } from "ml-matrix";
import { decodeHamming } from "../utils/decodeHamming.js";
import { decodeSyndrome } from "../utils/decodeSyndrome.js";
import { decodeC24 } from "../utils/decodeC24.js";

const router = express.Router();

router.post("/hamming", (req, res) => {
  const { pcm, word, modulo } = req.body;
  try {
    const pcmMatrix = new Matrix(pcm);
    const wordMatrix = new Matrix(word);
    const decoded = decodeHamming(pcmMatrix, wordMatrix, modulo);
    res.json({ codeword: decoded.to1DArray().join("") });
  } catch {
    res.status(400).json({ error: "Invalid input or word is rejected." });
  }
});

router.post("/syndrome", (req, res) => {
  const { pcm, word, modulo } = req.body;
  try {
    const pcmMatrix = new Matrix(pcm);
    const wordMatrix = new Matrix(word);
    const decoded = decodeSyndrome(pcmMatrix, wordMatrix, modulo);
    res.json({ codeword: decoded.to1DArray().join("") });
  } catch {
    res.status(400).json({ error: "Invalid input or word is rejected." });
  }
});

router.post("/c24", (req, res) => {
  const { word } = req.body;
  try {
    const wordMatrix = new Matrix(word);
    const decoded = decodeC24(wordMatrix);
    res.json({ codeword: decoded });
  } catch {
    res.status(400).json({ error: "Invalid input or word is rejected." });
  }
});
export { router as decodeRouter };
