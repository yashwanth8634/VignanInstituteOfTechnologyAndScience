import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── Nonce-Based CSP Middleware ────────────────────────────────────────────
// Generates a fresh cryptographic nonce on every request.
// The nonce is injected into the CSP header and forwarded as `x-nonce`
// so server components in the App Router can read it via headers() and
// apply it to any <script> or <style> tags that need it.
// This removes the need for 'unsafe-inline' in script-src.

export function middleware(request: NextRequest) {
  // Generate a secure random nonce (base64, 16 bytes = 128 bits)
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    "default-src 'self'",

    // Nonce allows Next.js hydration scripts. 'strict-dynamic' trusts
    // scripts loaded by already-trusted scripts.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,

    // Styles: 'unsafe-inline' is required for React inline style props and
    // Tailwind. NOTE: do NOT add a nonce here — per the CSP spec, when a
    // nonce is present in style-src, browsers IGNORE 'unsafe-inline',
    // which blocks all React style={{}} attributes.
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,

    "font-src 'self' https://fonts.gstatic.com data:",

    [
      "img-src 'self' data: blob:",
      "https://images.unsplash.com",
      "https://vignanits.ac.in",
      "https://srivasaviengg.ac.in",
      "https://i.pinimg.com",
      "https://res.cloudinary.com",
      "https://lh3.googleusercontent.com",
    ].join(" "),

    "media-src 'self' https://res.cloudinary.com",

    [
      "connect-src 'self'",
      "https://www.google-analytics.com",
      "https://vitals.vercel-insights.com",
      "https://res.cloudinary.com",
    ].join(" "),

    // Allow Google Drive embeds (PDFs linked from the site open in Drive)
    "frame-src 'self' https://drive.google.com https://www.google.com",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

  // Clone the request headers and attach the nonce so Server Components
  // can read it: `const nonce = headers().get('x-nonce')`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Set the CSP on the response
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

// Run on all routes except Next.js internals and static assets
export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
