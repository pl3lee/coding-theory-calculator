import { Matrix } from "ml-matrix";
import { decodeSyndrome } from "@/utils/decodeSyndrome";

export async function POST(request: Request) {
  const req = await request.json()
  const { pcm, word, modulo } = req
  try {
    const pcmMatrix = new Matrix(pcm);
    const wordMatrix = new Matrix(word);
    const decoded = decodeSyndrome(pcmMatrix, wordMatrix, modulo);
    return Response.json({ codeword: decoded.to1DArray().join("") });
  } catch {
    return new Response("Invalid input or word is rejected.", { status: 400 })
  }
}