// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Project documentation', // Title for your website.
  baseUrl: '/', // Base URL for your project */

  projectName: 'Project documentation',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [],

  /* Colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B'
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} DayOne`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default'
  },

  // Add custom scripts here that would be placed in <script> tags.
  // scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',

  // No .html extensions for paths.
  cleanUrl: true

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
}

module.exports = siteConfig
