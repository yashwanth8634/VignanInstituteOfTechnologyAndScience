import type { NextConfig } from "next";
import BundleAnalyzer from "@next/bundle-analyzer";

/* ────────────────────────────────────────────────────────────────────────── */
/* Bundle Analyzer                                                            */
/* Usage: ANALYZE=true npm run build                                          */
/* ────────────────────────────────────────────────────────────────────────── */
const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

/* ────────────────────────────────────────────────────────────────────────── */
/* Security Headers (CSP handled in middleware with nonce)                   */
/* ────────────────────────────────────────────────────────────────────────── */
const securityHeaders = [
  // Clickjacking protection
  {
    key: "X-Frame-Options",
    value: "DENY",
  },

  // Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // Control referrer information
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  // Feature restrictions
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "payment=()",
      "usb=()",
      "geolocation=()",
      "magnetometer=()",
      "gyroscope=()",
      "accelerometer=()",
      "display-capture=()",
      "screen-wake-lock=()",
    ].join(", "),
  },

  // Process isolation
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },

  // Resource isolation
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-site",
  },

  // Enforce HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // Enable DNS prefetching
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

/* ────────────────────────────────────────────────────────────────────────── */
/* Main Next.js Config                                                        */
/* ────────────────────────────────────────────────────────────────────────── */
const nextConfig: NextConfig = {
  /* ───────── Image Optimization ───────── */
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

  /* ───────── Global Security Headers ───────── */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  /* ───────── Production Hardening ───────── */
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error"] }
        : false,
  },
};

export default withBundleAnalyzer(nextConfig);