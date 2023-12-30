/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
