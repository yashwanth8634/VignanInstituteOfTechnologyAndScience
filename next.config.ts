import type { NextConfig } from "next";

// ─── CSP Nonce Alternative: using strict-dynamic + nonce is ideal,
// but for a static/SSG site a hash-based or allowlist CSP is practical.
// For Vercel static deployments, we define it here via headers().

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline'
    https://fonts.googleapis.com
    https://cdn.jsdelivr.net;
  font-src 'self'
    https://fonts.gstatic.com
    data:;
  img-src 'self' data: blob:
    https://images.unsplash.com
    https://vignanits.ac.in
    https://srivasaviengg.ac.in
    https://i.pinimg.com
    https://res.cloudinary.com
    https://lh3.googleusercontent.com;
  media-src 'self'
    https://res.cloudinary.com;
  connect-src 'self'
    https://www.google-analytics.com
    https://vitals.vercel-insights.com
    https://res.cloudinary.com;
  frame-src 'none';
  frame-ancestors 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  // ── 1. Content-Security-Policy ──────────────────────────────────────────
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },

  // ── 2. X-Frame-Options (legacy clickjacking protection) ─────────────────
  // Redundant with CSP frame-ancestors but needed for older browsers.
  {
    key: "X-Frame-Options",
    value: "DENY",
  },

  // ── 3. X-Content-Type-Options ───────────────────────────────────────────
  // Prevents browsers from MIME-sniffing a response away from the declared type.
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // ── 4. Referrer-Policy ──────────────────────────────────────────────────
  // Sends full URL within same origin, only origin to HTTPS cross-origin,
  // and nothing for HTTP destinations.
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  // ── 5. Permissions-Policy ───────────────────────────────────────────────
  // Disable powerful features not needed by an informational site.
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "magnetometer=()",
      "gyroscope=()",
      "accelerometer=()",
      "ambient-light-sensor=()",
      "autoplay=(self)",
      "fullscreen=(self)",
      "picture-in-picture=()",
      "display-capture=()",
      "screen-wake-lock=()",
      "interest-cohort=()", // disable FLoC
    ].join(", "),
  },

  // ── 6. Cross-Origin-Opener-Policy ───────────────────────────────────────
  // Isolates the browsing context group to mitigate Spectre/cross-origin leaks.
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },

  // ── 7. Cross-Origin-Resource-Policy ─────────────────────────────────────
  // Prevents other origins from reading your resources (images, fonts, etc.)
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-site",
  },

  // ── 8. Strict-Transport-Security ────────────────────────────────────────
  // Already set by Vercel, but explicit here for completeness.
  // 2-year max-age with includeSubDomains + preload.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // ── 9. X-DNS-Prefetch-Control ───────────────────────────────────────────
  // Controls DNS prefetching (performance vs. privacy trade-off).
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  // ── 10. X-XSS-Protection ────────────────────────────────────────────────
  // Legacy header for very old browsers. Modern browsers ignore it since
  // CSP is sufficient, but it doesn't hurt to include it.
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  // ── Image Optimisation ──────────────────────────────────────────────────
  images: {
    // Use the modern formats for better compression (saves bandwidth)
    formats: ["image/avif", "image/webp"],
    // Allowed external image sources
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "vignanits.ac.in",
      },
      {
        protocol: "https",
        hostname: "srivasaviengg.ac.in",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    // Limit image sizes to avoid serving unnecessarily large variants
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize layout shifts
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },

  // ── HTTP Security Headers ───────────────────────────────────────────────
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // ── Production Hardening ────────────────────────────────────────────────
  // Suppress the X-Powered-By: Next.js response header
  poweredByHeader: false,

  // Enable React strict mode for better error detection in dev
  reactStrictMode: true,

  // Compression – Vercel handles this at the edge, but enable for self-hosted
  compress: true,
};

export default nextConfig;
