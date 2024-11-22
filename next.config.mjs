/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.napse.ac",
        pathname: "**",
      }
    ]
  }
};

export default nextConfig;
