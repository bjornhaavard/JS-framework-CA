import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["static.noroff.dev", "static.noroff.dev/api/online-shop"],
  },
};

export default nextConfig;
