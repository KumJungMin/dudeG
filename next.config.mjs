/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "styles/variables.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
      },
      {
        protocol: 'https',
        hostname: 'p.kakaocdn.net',
      },
    ],
  },
};

export default nextConfig;
