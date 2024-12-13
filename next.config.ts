import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
    domains: ["static.noroff.dev", "static.noroff.dev/api/online-shop"],
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
