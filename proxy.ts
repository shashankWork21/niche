import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { db } from "@/db";

interface TokenPayload {
  userId: number;
  tokenId?: number;
}

/**
 * Proxy for additional security checks and automatic token refresh
 *
 * Note: Next.js Server Actions already have built-in CSRF protection through:
 * 1. Origin header validation
 * 2. Same-site cookie enforcement
 *
 * This proxy adds additional validation for sensitive routes and handles
 * automatic access token refresh using refresh tokens
 */
export default async function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Handle automatic token refresh
  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  // Only attempt refresh if we have tokens
  if (accessToken || refreshToken) {
    // Try to verify access token
    let accessTokenValid = false;
    try {
      jwt.verify(accessToken || "", process.env.ACCESS_TOKEN_SECRET!);
      accessTokenValid = true;
    } catch (error: unknown) {
      console.log(error);
      // Access token is invalid or expired
      accessTokenValid = false;
    }

    // If access token is invalid but refresh token exists, try to refresh
    if (!accessTokenValid && refreshToken) {
      try {
        // Verify refresh token
        const payload = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET!
        ) as TokenPayload;

        // Check if refresh token exists in database and is not expired
        const tokenRecord = await db.token.findUnique({
          where: { refreshToken },
        });

        if (tokenRecord && tokenRecord.refreshExpiresAt >= new Date()) {
          // Generate new access token
          const newAccessToken = jwt.sign(
            { userId: payload.userId, tokenId: tokenRecord.id },
            process.env.ACCESS_TOKEN_SECRET!,
            { expiresIn: "12h" }
          );

          // Update response with new access token
          response.cookies.set("access_token", newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            expires: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours
            path: "/",
          });
        } else {
          // Refresh token is invalid or expired, clear cookies
          response.cookies.delete("access_token");
          response.cookies.delete("refresh_token");
        }
      } catch (error: unknown) {
        console.log(error);
        // Refresh token is invalid, clear cookies
        response.cookies.delete("access_token");
        response.cookies.delete("refresh_token");
      }
    } else if (!accessTokenValid && !refreshToken) {
      // No valid tokens, clear access token
      response.cookies.delete("access_token");
    }
  }

  // Validate origin for state-changing requests
  if (
    request.method === "POST" ||
    request.method === "PUT" ||
    request.method === "DELETE" ||
    request.method === "PATCH"
  ) {
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");

    // If origin is present, validate it
    if (origin) {
      try {
        const originUrl = new URL(origin);
        if (originUrl.host !== host) {
          console.warn(
            `CSRF attempt detected: origin ${origin} !== host ${host}`
          );
          return new NextResponse("Forbidden", { status: 403 });
        }
      } catch (error) {
        console.error("Invalid origin header:", error);
        return new NextResponse("Bad Request", { status: 400 });
      }
    }
  }

  // Add security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Set Strict-Transport-Security in production
  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains"
    );
  }

  return response;
}

// Configure which routes should be protected
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
