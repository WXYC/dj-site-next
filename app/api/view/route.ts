import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const viewMode = cookieStore.get("viewMode")?.value || "modern";
  return NextResponse.json({ viewMode });
}

export async function POST(req: Request) {
  const cookieStore = cookies();
  const { viewMode } = await req.json();
  cookieStore.set("viewMode", viewMode, { path: "/" });
  return NextResponse.json({ viewMode });
}
