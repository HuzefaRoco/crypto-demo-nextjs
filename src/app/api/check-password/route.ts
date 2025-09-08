import { NextResponse } from "next/server";

const PASSWORD = process.env.ACCESS_PASSWORD as string;

if (!PASSWORD) {
  throw new Error('ACCESS_PASSWORD environment variable is not set');
}

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === PASSWORD) {
    const res = NextResponse.json({ success: true });
    res.cookies.set("access", PASSWORD, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });
    return res;
  }

  return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
}
