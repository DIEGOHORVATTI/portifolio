/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right'
  },
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org']
  }
}


export default nextConfig

