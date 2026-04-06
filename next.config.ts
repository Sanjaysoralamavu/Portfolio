import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,
  ...(isGitHubPages && {
    output: "export",
    basePath: "/Portfolio",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
