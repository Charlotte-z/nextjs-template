const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  swcMinify: true,
  productionBrowserSourceMaps: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/teams',
        permanent: true,
      },
    ];
  },
};
