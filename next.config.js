/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },

  webpack: (config, options) => {
    config.output.publicPath = "http://localhost:3000/_next/";
    console.log(config)
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "fe3",
        filename: "static/chunks/remoteEntry.js",
        remoteType: "var",
        remotes: {
          mf1: "mf1",
        },

        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );

    return config;
  },
};

module.exports = nextConfig;
