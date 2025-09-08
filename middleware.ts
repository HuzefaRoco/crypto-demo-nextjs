import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Password for access
const PASSWORD = "mypassword";

// Routes to protect
const protectedPaths = ["/"]; // Add other routes if needed

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Skip non-protected paths
  if (!protectedPaths.some(path => url.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const cookiePassword = req.cookies.get("access")?.value;

  // If password matches, allow access
  if (cookiePassword === PASSWORD) {
    return NextResponse.next();
  }

  // Otherwise redirect to password entry page
  url.pathname = "/enter-password";
  return NextResponse.redirect(url);
}
