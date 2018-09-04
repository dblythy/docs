/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
const markdownInclude = require('./markdownInclude');

const siteConfig = {
  title: 'Parse', // Title for your website.
  tagline: 'The Complete Application Stack',
  url: 'https://parseplatform.org', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'parse-community',
  organizationName: 'parse-community',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: '/', label: 'Docs'},
    {search: true },
    {href: 'https://blog.parseplatform.org', label: 'Blog'},
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/logo.svg',
  favicon: 'img/favicon/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#169CEE',
    secondaryColor: '#094d77',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()}. The Parse Community.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'github',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://unpkg.com/clipboard@2.0.0/dist/clipboard.min.js",
    "/js/code-blocks-buttons.js",
    'https://buttons.github.io/buttons.js',
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
  markdownPlugins: [
    markdownInclude,
  ],

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/parse-community/parse-server',

  apis: {
    'parse-server': 'https://parseplatform.org/parse-server/api/',
    ios: 'https://parseplatform.org/Parse-SDK-iOS-OSX/api/',
    android: 'https://parseplatform.org/Parse-SDK-Android/api/',
    js: 'https://parseplatform.org/Parse-SDK-JS/api/',
    php: 'https://parseplatform.org/parse-php-sdk/namespaces/Parse.html',
    dotnet: 'https://parseplatform.org/Parse-SDK-dotNET/api/'
  }
};

module.exports = siteConfig;
