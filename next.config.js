/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "ndsc.b-cdn.net" }],
  },
};

module.exports = nextConfig;
