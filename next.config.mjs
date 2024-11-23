/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.skailar.ac",
        pathname: "**",
      }
    ]
  }
};

export default nextConfig;
