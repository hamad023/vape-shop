/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Enable SWC minification for faster builds
  swcMinify: true,
};

module.exports = nextConfig;
