/** @type {import('next').NextConfig} */
const nextConfig = {
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
