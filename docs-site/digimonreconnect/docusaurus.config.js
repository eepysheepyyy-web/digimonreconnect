// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digimon: ReConnect',
  tagline: 'A Fan Series',
  favicon: 'img/favicon.ico',

  url: 'https://wiki.digimonreconnect.com',
  baseUrl: '/',

  organizationName: 'eepysheepyyy-web',
  projectName: 'digimonreconnect',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/eepysheepyyy-web/digimonreconnect/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/eepysheepyyy-web/digimonreconnect/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reconnect',
        path: 'reconnect',
        routeBasePath: 'reconnect',
        sidebarPath: require.resolve('./sidebarsReconnect.js'),
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Digimon: ReConnect',
        logo: {
          alt: 'Digimon ReConnect Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'reconnect/overview',
            label: 'Project Overview',
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/eepysheepyyy-web/digimonreconnect',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
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
                href: 'https://github.com/eepysheepyyy-web/digimonreconnect',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Digimon: ReConnect`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
