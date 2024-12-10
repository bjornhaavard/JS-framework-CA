import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
    domains: ["static.noroff.dev", "static.noroff.dev/api/online-shop"],
  },
};

export default nextConfig;
