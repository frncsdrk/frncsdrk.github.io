// Saber config file
// https://saber.land/docs/saber-config.html

module.exports = {
  siteConfig: {
    description: 'Full-Stack developer'
  },

  // Use the package `saber-theme-portfolio`
  // More: https://saber.land/docs/themes.html
  theme: 'portfolio',

  // Configure the theme
  themeConfig: {
    style: 'light',
    projects: 'pinned-repos',
    github: 'frncsdrk',
    twitter: '',
    sponsorLink: '',
    sponsorTip: '',
    nav: [
      {
        text: 'Home',
        link: '/'
      }//,
      // {
      //   text: 'About',
      //   link: '/about'
      // }
    ]
  },

  permalinks: {
    page: '/:slug',
    post: '/posts/:slug'
  },

  plugins: [
    {
      resolve: 'saber-plugin-query-posts'
    }
  ]
}
