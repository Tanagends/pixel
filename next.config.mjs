/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    formats: ['image/avif', 'image/webp'], // Prioritize modern formats
    minimumCacheTTL: 60, // Cache optimized images for 60 seconds (adjust as needed)
    // You can set default qualities here if you want:
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // unoptimized: false, // Ensure optimization is enabled (default)
    // domains: ['example.com'], // If you load images from external domains
  },
};

export default nextConfig;
