/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    customKey:
      "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
  },
  images: {
    domains: ["occ-0-3933-116.1.nflxso.net"],
  },
};

module.exports = nextConfig;
