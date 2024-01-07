const withNextIntl = require("next-intl/plugin")("./src/i18n.ts");

module.exports = withNextIntl({
  reactStrictMode: true,
  distDir: "dist",
});
