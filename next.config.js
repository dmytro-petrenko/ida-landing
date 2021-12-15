/** @type {import('next').NextConfig} */
const path = require('path');
const withReactSvg = require('next-react-svg');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/img/svg'),
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config, options) {
    return config;
  },
});
