module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL
  },
  productionBrowserSourceMaps: true,
  async rewrites() {
    return [
      {
        source: '/o-mn%C4%9B',
        destination: '/about'
      },
      {
        source: '/kontakt',
        destination: '/contact'
      }
    ]
  }
}
