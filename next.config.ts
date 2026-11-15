import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All current routes are static, so Oracle can serve the export directly.
  output: "export",
};

export default nextConfig;
