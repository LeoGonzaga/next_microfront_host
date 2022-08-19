/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',


  
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true };
    config.output.publicPath = "http://localhost:3001/_next/";
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name:"mf3",
        remoteType: "var",
        
        remotes: {
            mf1: 'mf1'
        },
       
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
        ]
      })
    )
    return config
  }
}

module.exports = nextConfig