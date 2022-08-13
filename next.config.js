/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["geografiya.uz", "s3-alpha-sig.figma.com"],
  },
};

module.exports = nextConfig;
