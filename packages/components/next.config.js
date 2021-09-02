/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.plugins.push(new webpack.IgnorePlugin(/\/src\/utils-server\//));
    }
    return config;
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  }
};
