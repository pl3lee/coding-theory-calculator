import { Matrix } from "ml-matrix";
import { findWeight } from "@/utils/findWeight";

export async function POST(request: Request) {
  const req = await request.json()
  const { words } = req
  try {
    const wordsMatrix = words.map((word: number[]) => new Matrix([word]));
    const weight = findWeight(...wordsMatrix);
    return Response.json({ weight: weight });
  } catch {
    return new Response("Invalid input.", { status: 400 })
  }
}