/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // Optionally, you can also specify a port and pathname
      },
    ],
  },
};

module.exports = nextConfig;
