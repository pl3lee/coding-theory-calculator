import { hammingDistance } from "@/utils/hammingDistance"


export async function POST(request: Request) {
  const req = await request.json()
  const { words } = req
  try {
    const hammingDist = hammingDistance(...words);
    return Response.json({ hammingDistance: hammingDist });
  } catch {
    return new Response("Invalid input.", { status: 400 })
  }
}
