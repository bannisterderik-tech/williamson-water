import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All photography is served from /public/img and listed in src/lib/imagery.ts.
  // No remote image hosts are allowed: the May 2026 build whitelisted Unsplash
  // and picsum placeholders, which is how placeholder art reaches production.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
