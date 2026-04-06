import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,
  ...(isGitHubActions && {
    output: "export",
    basePath: "/Portfolio",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
