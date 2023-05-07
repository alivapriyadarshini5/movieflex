/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    customKey:
      "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
    MONGODB_URL:
      "mongodb+srv://alivapriyadarshini5:alivapriyadarshini5@cluster0.hrflggt.mongodb.net/?retryWrites=true&w=majority",
  },
  images: {
    domains: ["occ-0-3933-116.1.nflxso.net"],
  },
};

module.exports = nextConfig;
