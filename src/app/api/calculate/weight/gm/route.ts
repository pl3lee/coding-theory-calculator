import { Matrix } from "ml-matrix";
import { findWeightGM } from "@/utils/findWeightGM";

export async function POST(request: Request) {
  const req = await request.json()
  const { gm, modulo } = req
  try {
    const gmMatrix = new Matrix(gm);
    const weight = findWeightGM(gmMatrix, modulo);
    return Response.json({ weight: weight });
  } catch {
    return new Response("Invalid input.", { status: 400 })
  }
}