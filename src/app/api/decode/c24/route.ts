import { Matrix } from "ml-matrix";
import { decodeC24 } from "@/utils/decodeC24";

export async function POST(request: Request) {
  const req = await request.json()
  const { word } = req
  try {
    const wordMatrix = new Matrix(word);
    const decoded = decodeC24(wordMatrix);
    return Response.json({ codeword: decoded });
  } catch {
    return new Response("Invalid input or word is rejected.", { status: 400 })
  }
}