/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'www.gravatar.com',
              port: '',
          },
          {
              protocol: process.env.NEXT_API_PROTOCOL,
              hostname: process.env.NEXT_API_HOSTNAME,
              port: process.env.NEXT_API_PORT,
          },
      ]
  }
};

export default nextConfig;
