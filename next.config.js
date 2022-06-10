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
};

module.exports = nextConfig;
