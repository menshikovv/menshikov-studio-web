/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 's10.iimage.su' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
    ],
  },
}

export default nextConfig
