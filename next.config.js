/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [{ hostname: "ndsc.b-cdn.net" }],
  },
};

module.exports = nextConfig;
