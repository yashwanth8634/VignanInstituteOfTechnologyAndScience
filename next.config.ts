import type { NextConfig } from "next";
import BundleAnalyzer from "@next/bundle-analyzer";

// ─── Bundle Analyzer ────────────────────────────────────────────────────────
// Usage: ANALYZE=true npm run build
const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

// ─── Security Headers ────────────────────────────────────────────────────────
// NOTE: Content-Security-Policy is set dynamically per-request in
// src/middleware.ts using a cryptographic nonce.
// All other headers are static and set here.
const securityHeaders = [
  // ── 1. X-Frame-Options (legacy clickjacking protection) ──────────────────
  {
    key: "X-Frame-Options",
    value: "DENY",
  },

  // ── 2. X-Content-Type-Options ─────────────────────────────────────────────
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // ── 3. Referrer-Policy ────────────────────────────────────────────────────
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  // ── 4. Permissions-Policy ─────────────────────────────────────────────────
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
      "autoplay=(self)",
      "fullscreen=(self)",
      "picture-in-picture=()",
      "display-capture=()",
      "screen-wake-lock=()",
    ].join(", "),
  },

  // ── 5. Cross-Origin-Opener-Policy ─────────────────────────────────────────
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },

  // ── 6. Cross-Origin-Resource-Policy ──────────────────────────────────────
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-site",
  },

  // ── 7. Strict-Transport-Security ─────────────────────────────────────────
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // ── 8. X-DNS-Prefetch-Control ─────────────────────────────────────────────
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  // ── 9. X-XSS-Protection ───────────────────────────────────────────────────
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  // ── Image Optimisation ────────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "vignanits.ac.in" },
      { protocol: "https", hostname: "srivasaviengg.ac.in" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },

  // ── HTTP Security Headers ─────────────────────────────────────────────────
  // CSP is set per-request in src/middleware.ts (nonce-based).
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // ── Production Hardening ──────────────────────────────────────────────────
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  // Strip console.log/warn in production builds (keep console.error)
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default withBundleAnalyzer(nextConfig);
