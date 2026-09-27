import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export: `next build` writes the site to /out.
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
