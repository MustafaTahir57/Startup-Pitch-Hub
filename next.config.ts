import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },

  devIndicators: {
    position: "bottom-left",
  },
    eslint: {
    ignoreDuringBuilds: true, // ← add this
  },
  typescript: {
    ignoreBuildErrors: true, // ← add this too (safety net)
  },
};

export default nextConfig;