/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Next.js responsive image optimization for the large photographic portfolio.
  // Image variants are generated and cached by the deployment platform.
  images: {
    formats: ['image/webp'],
  },
}

export default nextConfig
