import { NextResponse } from "next/server";

const PASSWORD = "mypassword";

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
