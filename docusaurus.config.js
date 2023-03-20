// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Up2Go",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.rubinda.si",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/developer_docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/rubinda/up2Go_notes",
        },
        blog: false,
        // blog: {

        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // theme: {
        //   customCss: require.resolve('./src/css/custom.css'),
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: "Up2Go Logo",
          src: "img/Up2GoDark.webp",
          srcDark: "img/Up2GoLight.webp",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Development",
          },
          {
            href: "https://github.com/rubinda/up2Go_notes",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Repositories",
            items: [
              {
                label: "2Team",
                href: "https://github.com/Up2Go/2Team",
              },
              {
                label: "CPRM",
                href: "https://github.com/Up2Go/cprm",
              },
              {
                label: "Clean",
                href: "https://github.com/Up2Go/up2go-clean",
              },
            ],
          },
          {
            title: "Docs",
            items: [
              {
                label: "Official onboarding",
                href: "https://sites.google.com/up2go.com/up2go-devson-boarding/welcome",
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["apex"],
      },
    }),
};

module.exports = config;
