// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ハチアンブログ',
  tagline: 'なにかかく',
  url: 'https://sage-biscochitos-ac0f4e.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hachian', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hachian/docusaurus/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hachian/docusaurus/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ハチアンブログ',
        logo: {
          alt: 'My Site Logo',
          src: 'img/200x200.svg',
        },
        items: [
          {to: '/about', label: 'About', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/slides', label: 'Slides', position: 'left'},
          {to: '/youtube', label: 'Youtube', position: 'left'},
          {
            href: 'https://github.com/hachian/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contents',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Slides',
                to: '/slides',
              },
            ],
          },
          {
            title: 'Social Accounts',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/_hachian',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hachian/docusaurus',
              },
              {
                label: 'Youtube',
                to: '/youtube',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ハチアンブログ All Rights Reserved`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
