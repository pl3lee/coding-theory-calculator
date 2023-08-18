import express from "express";
import { Matrix } from "ml-matrix";
import { hammingDistance } from "../utils/hammingDistance.js";
import { findWeight } from "../utils/findWeight.js";
import { findWeightGM } from "../utils/findWeightGM.js";

const router = express.Router();

router.post("/hamming-distance", (req, res) => {
  const { strings } = req.body;
  try {
    const hammingDist = hammingDistance(...strings);
    res.json({ hammingDistance: hammingDist });
  } catch {
    res.status(400).json({ error: "Invalid input." });
  }
});

router.post("/weight/words", (req, res) => {
  const { words } = req.body;
  try {
    const wordsMatrix = words.map(
      (word) => new Matrix([word.split("").map((char) => parseInt(char))])
    );
    const weight = findWeight(...wordsMatrix);
    res.json({ weight: weight });
  } catch {
    res.status(400).json({ error: "Invalid input." });
  }
});

router.post("/weight/gm", (req, res) => {
  const { gm, modulo } = req.body;
  try {
    const gmMatrix = new Matrix(gm);
    const weight = findWeightGM(gmMatrix, modulo);
    res.json({ weight: weight });
  } catch {
    res.status(400).json({ error: "Invalid input." });
  }
});

export { router as calculateRouter };
