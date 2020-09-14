// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ohgm.dev',
  siteUrl: 'https://o-hgm.github.io',
  plugins: [{
    use: "gridsome-plugin-tailwindcss",
  }
],

  pathPrefix: '/www-public',
}
