import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/edition-2024",
  assetPrefix: "/edition-2024",
  images: { unoptimized: true },
};

export default nextConfig;
