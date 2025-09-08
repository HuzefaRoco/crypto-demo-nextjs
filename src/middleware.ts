import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSWORD = process.env.ACCESS_PASSWORD;

if (!PASSWORD) {
  throw new Error('ACCESS_PASSWORD environment variable is not set');
}

export function middleware(req: NextRequest) {
  // Get the pathname of the request
  const pathname = req.nextUrl.pathname;

  // Skip middleware for these paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/enter-password' ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check for the password cookie
  const cookiePassword = req.cookies.get("access")?.value;

  // If password matches, allow access
  if (cookiePassword === PASSWORD) {
    return NextResponse.next();
  }

  // Redirect to password page
  const url = new URL('/enter-password', req.url);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
