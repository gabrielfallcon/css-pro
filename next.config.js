const { redirect } = require('next/dist/server/api-utils')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['.ts', '.tsx', '.js', '.jsx'],
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = {
  nextConfig,
}