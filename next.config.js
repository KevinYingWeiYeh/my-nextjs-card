/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export
  basePath: "/my-nextjs-card", // Your repository name
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
