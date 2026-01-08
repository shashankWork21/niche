/**
 * CSRF Protection for Next.js Server Actions
 *
 * Next.js Server Actions have built-in CSRF protection through:
 * 1. Origin header validation
 * 2. Same-site cookies
 *
 * This module provides additional protection for sensitive operations
 */

import { randomBytes } from "crypto";
import { cookies, headers } from "next/headers";

const CSRF_TOKEN_LENGTH = 32;
const CSRF_COOKIE_NAME = "csrf_token";

/**
 * Generate a CSRF token
 */
export function generateCsrfToken(): string {
  return randomBytes(CSRF_TOKEN_LENGTH).toString("hex");
}

/**
 * Set CSRF token in cookie
 */
export async function setCsrfToken(): Promise<string> {
  const token = await generateCsrfToken();
  const cookieStore = await cookies();

  cookieStore.set(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });

  return token;
}

/**
 * Get CSRF token from cookie
 */
export async function getCsrfToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(CSRF_COOKIE_NAME)?.value || null;
}

/**
 * Validate CSRF token from request headers
 * Next.js already validates origin headers, but this adds an extra layer
 */
export async function validateCsrfToken(): Promise<boolean> {
  const headersList = await headers();
  const cookieStore = await cookies();

  // Get token from cookie
  const cookieToken = cookieStore.get(CSRF_COOKIE_NAME)?.value;
  if (!cookieToken) {
    return false;
  }

  // Get token from custom header (set by client)
  const headerToken = headersList.get("x-csrf-token");
  if (!headerToken) {
    return false;
  }

  // Compare tokens (constant-time comparison)
  return timingSafeEqual(cookieToken, headerToken);
}

/**
 * Timing-safe string comparison to prevent timing attacks
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

/**
 * Validate origin header matches the expected origin
 * This is already done by Next.js, but we expose it for explicit checks
 */
export async function validateOrigin(): Promise<boolean> {
  const headersList = await headers();
  const origin = headersList.get("origin");
  const host = headersList.get("host");

  if (!origin || !host) {
    // For same-origin requests, origin might not be present
    // Check referer as fallback
    const referer = headersList.get("referer");
    if (!referer) {
      return false;
    }

    try {
      const refererUrl = new URL(referer);
      return refererUrl.host === host;
    } catch {
      return false;
    }
  }

  // Validate origin matches host
  try {
    const originUrl = new URL(origin);
    return originUrl.host === host;
  } catch {
    return false;
  }
}

/**
 * Comprehensive CSRF validation
 * Combines origin validation and token validation
 */
export async function validateCsrf(): Promise<{
  valid: boolean;
  reason?: string;
}> {
  // First, validate origin (primary defense)
  const originValid = await validateOrigin();
  if (!originValid) {
    return { valid: false, reason: "Invalid origin" };
  }

  // For state-changing operations, also validate CSRF token
  const tokenValid = await validateCsrfToken();
  if (!tokenValid) {
    return { valid: false, reason: "Invalid CSRF token" };
  }

  return { valid: true };
}
