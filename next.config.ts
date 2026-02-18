import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
    ],
  },
};

export default nextConfig;
