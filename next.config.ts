import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/agri-chllenge-website" : "",
  assetPrefix: isProd ? "/agri-chllenge-website/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
