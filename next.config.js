/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i3.ytimg.com"], // Allow images from ytimg.com
  },
  eslint: {
    // Warnings don't block production builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
