import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: [
  //     "avatars.githubusercontent.com"
  //   ],
  // }
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: '',
        pathname: '/u/*',
      }
    ],
  }
};

export default nextConfig;
