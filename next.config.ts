import type { NextConfig } from "next";

/**
 * Local/dev  -> standalone output (sandbox default)
 * CI/export  -> static export for GitHub Pages, driven by env vars:
 *   NEXT_OUTPUT=export  NEXT_BASE_PATH=/<repo>
 */
const isExport = process.env.NEXT_OUTPUT === "export";
const basePath = process.env.NEXT_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(isExport
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: basePath || undefined,
        images: { unoptimized: true },
      }
    : {
        output: "standalone" as const,
      }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
