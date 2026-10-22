import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Menu photos come from Qlub's media bucket.
    remotePatterns: [
      new URL("https://qlub-cloud.s3.ap-southeast-1.amazonaws.com/digital_menu/**"),
    ],
  },
};

export default nextConfig;
