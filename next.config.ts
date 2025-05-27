import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:4000'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/scss')],
    prependData: `
      @use "@/styles/_variables" as *;
      @use "@/styles/_mixins" as *;
      @use "@/styles/_functions" as *;
    `,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' https://www.googletagmanager.com 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self';
              connect-src 'self' https:;
              frame-src https://www.youtube.com https://www.google.com;
            `
              .replace(/\s{2,}/g, ' ')
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
