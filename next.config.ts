import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/agri-challenge2",
  assetPrefix: "/agri-challenge2",
  images: { unoptimized: true },
};

export default nextConfig;