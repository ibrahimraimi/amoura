import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Ignoring TypeScript errors during build
    // This is not recommended unless you're fully aware of the risks
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
