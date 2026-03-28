/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // génère un dossier /out statique → upload sur OVH
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
