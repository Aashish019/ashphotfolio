/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // 👈 forces static export (creates /out folder)
  images: { unoptimized: true },
  distDir: 'out',
  basePath: '/ashphotfolio', // 👈 same as your repo name
  assetPrefix: '/ashphotfolio/',
};

export default nextConfig;
