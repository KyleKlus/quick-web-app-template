/**
 * @format
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: 'BASE_PATH',
  output: 'export',
  images: { unoptimized: true, qualities: [100] },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
