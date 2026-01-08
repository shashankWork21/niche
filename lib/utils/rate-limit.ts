/**
 * Simple in-memory rate limiter using sliding window
 * For production, consider using Redis or a dedicated rate limiting service
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt < now) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

/**
 * Check if a request is allowed based on rate limiting
 * @param identifier - Unique identifier (e.g., IP address, user ID, email)
 * @param config - Rate limit configuration
 * @returns Rate limit result with allowed status and metadata
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const key = identifier;

  let entry = rateLimitStore.get(key);

  // If no entry or expired, create new one
  if (!entry || entry.resetAt < now) {
    entry = {
      count: 1,
      resetAt: now + config.windowMs,
    };
    rateLimitStore.set(key, entry);

    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetAt: entry.resetAt,
    };
  }

  // Check if limit exceeded
  if (entry.count >= config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: entry.resetAt,
    };
  }

  // Increment count
  entry.count++;

  return {
    allowed: true,
    remaining: config.maxRequests - entry.count,
    resetAt: entry.resetAt,
  };
}

/**
 * Get client identifier from request headers
 * Uses IP address as identifier
 */
export async function getClientIdentifier(
  type: "ip" | "email" = "ip",
  customId?: string
): Promise<string> {
  if (customId) {
    return `${type}:${customId}`;
  }

  // For Next.js server actions, we need to get headers
  const { headers } = await import("next/headers");
  const headersList = await headers();

  // Try to get real IP from common proxy headers
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0] || realIp || "unknown";

  return `${type}:${ip}`;
}

/**
 * Rate limit configurations for different endpoints
 */
export const RATE_LIMITS = {
  // 3 login attempts per 15 minutes per IP
  LOGIN: {
    maxRequests: 3,
    windowMs: 15 * 60 * 1000,
  },
  // 3 registration attempts per hour per IP
  REGISTER: {
    maxRequests: 3,
    windowMs: 60 * 60 * 1000,
  },
  // 3 password reset requests per hour per email
  PASSWORD_RESET: {
    maxRequests: 3,
    windowMs: 60 * 60 * 1000,
  },
  // 5 email verification requests per hour per user
  EMAIL_VERIFICATION: {
    maxRequests: 5,
    windowMs: 60 * 60 * 1000,
  },
} as const;
