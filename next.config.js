const withNextIntl = require("next-intl/plugin")("./src/i18n.ts");

module.exports = withNextIntl({
  images: {
    domains: ["images.ctfassets.net", "assets.aceternity.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
});
