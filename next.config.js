const withSass = require('@zeit/next-sass');

const pathPrefix = process.env.NODE_ENV === 'production' ? '/tracker-demo' : '';

module.exports = withSass({
  cssModules: true,
  assetPrefix: pathPrefix,
  publicRuntimeConfig: { pathPrefix }
});
