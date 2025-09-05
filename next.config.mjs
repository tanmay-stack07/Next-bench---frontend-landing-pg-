/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `canvas` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
  // Disable server-side rendering for the Spline component
  experimental: {
    esmExternals: 'loose',
  },
  // Transpile the Spline package
  transpilePackages: ['@splinetool/react-spline'],
};

export default nextConfig;
