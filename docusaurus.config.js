const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Fun with Fungi',
  tagline: 'Recycling waste with fungi from beer manufacturing',
  url: 'https://willblev.github.io',
  baseUrl: '/fun-with-fungi/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'willblev',
  projectName: 'fun-with-fungi',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Update with the link to your GitHub repo for direct edits
          editUrl: 'https://github.com/willblev/fun-with-fungi/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Update with the link to your GitHub repo for direct edits to the blog
          editUrl: 'https://github.com/willblev/fun-with-fungi/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Fun with Fungi',
      logo: {
        alt: 'Fun with Fungi Logo',
        src: '/img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/willblev/fun-with-fungi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/willblev/fun-with-fungi',
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
});
