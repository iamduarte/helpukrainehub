/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        //hostname: "medicalaidukraine.com",
        hostname: "**",
        port: "",
        //pathname: "/wp-content/uploads/**",
        pathname: "**",
      },
    ],
  },
};
