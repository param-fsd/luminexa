/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dribbble.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during builds
  },
};

export default nextConfig;