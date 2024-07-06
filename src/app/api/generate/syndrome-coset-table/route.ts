import { Matrix } from "ml-matrix";
import { generateSyndromeCosetTable } from "@/utils/generateSyndromeCosetTable";

export async function POST(request: Request) {
  const req = await request.json()
  const { pcm, modulo } = req
  try {
    const pcmMatrix = new Matrix(pcm);
    const syndromeCosetTable = generateSyndromeCosetTable(
      pcmMatrix,
      modulo,
      true
    );
    return Response.json({ syndromeCosetTable });
  } catch {
    return new Response("Invalid input.", { status: 400 })
  }
}