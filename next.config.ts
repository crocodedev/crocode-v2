import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', 'react-three'],
  images: {
    domains: ['localhost:3000', 'cdn.sanity.io'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/scss')],
    prependData: `
      @use "@/styles/_variables" as *;
      @use "@/styles/_mixins" as *;
      @use "@/styles/_functions" as *;
    `,
  },
  // eslint: {
  //   ignoreDuringBuilds: true, // отключает все ошибки ESLint
  // },
  // typescript: {
  //   ignoreBuildErrors: true, // Игнорировать TypeScript-ошибки (опционально)
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: `
  //             default-src 'self';
  //             script-src 'self' 'wasm-unsafe-eval' https://www.googletagmanager.com 'unsafe-inline';
  //             style-src 'self' 'unsafe-inline';
  //             img-src 'self' https: blob: data:;
  //             font-src 'self';
  //             connect-src 'self' https: https://www.gstatic.com/;
  //             frame-src https://www.youtube.com https://www.google.com;
  //           `
  //             .replace(/\s{2,}/g, ' ')
  //             .trim(),
  //         },
  //       ],
  //     },
  //   ];
  // },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    return config;
  },
};

export default nextConfig;
