/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: process.env.URL,
    QUOTES: process.env.QUOTES,
  },
  images: {
    loader: "custom",
  },
};

module.exports = nextConfig;
