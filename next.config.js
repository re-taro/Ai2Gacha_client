const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/trade',
        destination: '/submit',
        permanent: true,
      },
    ]
  },
};

module.exports = withPWA(nextConfig);
