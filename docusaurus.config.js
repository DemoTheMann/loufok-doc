// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Loufok',
  tagline: "Découvrez une variante de cadavre exquis pour la création d'histoires courtes.",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jbienvenu.alwaysdata.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/loufok/doc',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Loufok', // Usually your GitHub org/user name.
  projectName: 'doc Loufok', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Documentation Loufok',
        logo: {
          alt: 'Logo Loufok',
          src: 'img/logo.svg',
        },
        
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Introduction',
            to: '/docs/introduction',
          },
          // {to: '/docs/', label: 'Entitées', position: 'left'},
          // {to: '/blog', label: 'Admin', position: 'left'},
          // {to: '/blog', label: 'Cadavre', position: 'left'},
          // {to: '/blog', label: 'Contribution', position: 'left'},
          // {to: '/blog', label: 'Joueur', position: 'left'},
          // {to: '/blog', label: 'Login', position: 'left'},
          {
            href: 'https://github.com/DemoTheMann/loufok-2.0/tree/main',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
              {
                label: 'Models',
                to: '/docs/category/model',
              },
              {
                label: 'Entité Contribution',
                to: '/docs/entite-contribution',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'Application Loufok',
            items: [
              {
                label: 'Application Loufok',
                to: 'https://jbienvenu.alwaysdata.net/loufok',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DemoTheMann/loufok-2.0/tree/main',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
