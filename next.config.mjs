/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/script.js",
        destination: "https://cloud.umami.is/script.js",
      },
    ];
  },
};

export default nextConfig;
