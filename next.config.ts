import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to aivisionforum.github.io, no basePath needed
  // If deploying to a subdirectory, uncomment and set:
  // basePath: '/repository-name',
};

export default nextConfig;
