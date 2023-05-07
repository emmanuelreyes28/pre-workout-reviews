/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "example.com", "transparenttextures.com"],
  },
};

module.exports = nextConfig;
