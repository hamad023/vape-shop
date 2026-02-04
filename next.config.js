/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Server Components
  experimental: {
    serverActions: true,
  },
  // Optimize images for Vercel
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
  // Optimize for Vercel deployment
  output: 'standalone',
  // Enable SWC minification for faster builds
  swcMinify: true,
};

module.exports = nextConfig;
