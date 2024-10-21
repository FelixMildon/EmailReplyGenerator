/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/FelixMildon/NPCreply",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/felixmildon/npc-reply/7KGTXFBMpbNH3SUakdGTgFp1pDQL",
        permanent: false,
      },
    ];
  },
};
