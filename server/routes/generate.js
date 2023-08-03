import express from "express";
import { Matrix } from "ml-matrix";
import { generateSyndromeCosetTable } from "../utils/generateSyndromeCosetTable.js";

const router = express.Router();

router.post("/syndrome-coset-table", (req, res) => {
  const { pcm, modulo } = req.body;
  try {
    const pcmMatrix = new Matrix(pcm);
    const syndromeCosetTable = generateSyndromeCosetTable(
      pcmMatrix,
      modulo,
      true
    );
    res.json({ syndromeCosetTable });
  } catch {
    res.status(400).json({ error: "Invalid input." });
  }
});

export { router as generateRouter };
