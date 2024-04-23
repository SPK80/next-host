/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";
const remoteUrl = "https://remote-uikit-8pfo.vercel.app";
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "home",
        filename: "static/chunks/remoteEntry.js",
        remotes: { remote: `remote@${remoteUrl}/remoteEntry.js` },
      })
    );
    return config;
  },
};

export default nextConfig;
