/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})

const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    turbo: false, // disables Turbopack
  },
})

module.exports = nextConfig
