/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.bashruv.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dallem.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.metabeat.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
