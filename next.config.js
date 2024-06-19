/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "astroship-pro.web3templates.com", "via.placeholder.com", "images.unsplash.com", "plus.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "st3.depositphotos.com",
        port: "",
        pathname: "/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
