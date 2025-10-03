/** @type {import('next').NextConfig} */
const nextConfig = {}

const { version } = require('./package.json');

module.exports = {
  env: {
    NEXT_PUBLIC_PACKAGE_VERSION: version,
    NEXT_PUBLIC_LAST_UPDATED_AT: new Date().toISOString(), // <-- Auto-generated timestamp
  }
};