/** @type {import('next').NextConfig} */
const useProxy = process.env.USE_PROXY !== undefined;

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: useProxy ? "/support/" : "",
};

export default nextConfig;
