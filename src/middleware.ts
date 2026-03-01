import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── Static CSP Middleware ──────────────────────────────────────────────────
// A nonce-based CSP requires Next.js layout.tsx to read the nonce from request
// headers and stamp it on every <script> tag Next.js injects — complex wiring
// that breaks the moment one component misses it (exactly what was happening).
//
// Instead we use a standard static CSP:
//  - 'unsafe-inline' in script-src: required for Next.js hydration chunks and
//    inline event handlers injected at build time.
//  - 'unsafe-eval': required by Next.js dev mode; can be removed in production
//    by splitting configs if desired.
//  - All other directives remain strict (no external script hosts, frame-src
//    limited to trusted origins, etc.).

export function middleware(request: NextRequest) {
  const csp = [
    "default-src 'self'",

    // Next.js injects <script src="/_next/..."> tags without nonces,
    // so 'self' + 'unsafe-inline' are both required for the app to function.
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",

    // React inline style props (style={{}}) and Tailwind require unsafe-inline.
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

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

    // Allow Google Drive embeds (PDFs linked from the site open in Drive viewer)
    "frame-src 'self' https://drive.google.com https://www.google.com",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

  const response = NextResponse.next();
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
