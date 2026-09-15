import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/harryliz-barbers-demo",
  assetPrefix: "/harryliz-barbers-demo",
};

export default nextConfig;
