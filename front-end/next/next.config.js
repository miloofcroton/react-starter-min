module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'Hello Next.js' } },
      '/p/learn-nextjs': { page: '/post', query: { title: 'Learn Next.js is awesome' } },
      '/p/deploy-nextjs': { page: '/post', query: { title: 'Deploy apps with Zeit' } },
      '/p/exporting-pages': { page: '/post', query: { title: 'Learn to Export HTML Pages' } }
    }
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  }
}
