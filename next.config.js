// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lakickz.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'atimg.sonyunara.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.darles.co.kr',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
