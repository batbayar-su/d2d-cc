/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/vehicles/:path*",
        destination: "/api/vehicles/:path*",
      },
    ];
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
