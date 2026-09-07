import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/memory-lane",
  assetPrefix: "/memory-lane/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;