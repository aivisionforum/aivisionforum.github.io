import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    // Disable ESLint during builds to avoid CI conflicts
    ignoreDuringBuilds: true,
  },
  // If deploying to aivisionforum.github.io, no basePath needed
  // If deploying to a subdirectory, uncomment and set:
  // basePath: '/repository-name',
};

export default nextConfig;
