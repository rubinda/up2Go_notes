// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Up2Go',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rubinda.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/up2Go_notes',

  // GitHub pages deployment config.
  organizationName: 'rubinda',
  projectName: 'up2Go_notes',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/rubinda/up2Go_notes/blob/main',
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Up2Go Logo',
          src: 'img/Up2GoDark.webp',
          srcDark: 'img/Up2GoLight.webp',
        },
        items: [
          {
            href: 'https://github.com/rubinda/up2Go_notes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Repositories',
            items: [
              {
                label: '2Team',
                href: 'https://github.com/Up2Go/2Team',
              },
              {
                label: 'CPRM',
                href: 'https://github.com/Up2Go/cprm',
              },
              {
                label: 'Clean',
                href: 'https://github.com/Up2Go/up2go-clean',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Official onboarding',
                href: 'https://sites.google.com/up2go.com/up2go-devson-boarding/welcome',
              },
            ],
          },
        ],
        copyright: `David's notes © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['apex'],
      },
    }),
};

export default config;
