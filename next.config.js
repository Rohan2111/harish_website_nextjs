/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true,
  },
  // Only enable optimizeCss if critters is available
  experimental: process.env.CRITTERS_DISABLED ? {
    optimizeCss: false
  } : {
    optimizeCss: true
  }
}

module.exports = nextConfig
