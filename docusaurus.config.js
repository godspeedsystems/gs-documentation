// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Godspeed Docs',
  tagline: 'Documentation for Godspeed framework',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'Godspeed', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    // ... Your other plugins.
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        translations: {
          "search_placeholder": "Search",
          "see_all_results": "See all results",
          "no_results": "No results.",
          "search_results_for": "Search results for \"{{ keyword }}\"",
          "search_the_documentation": "Search the documentation",
          "count_documents_found": "{{ count }} document found",
          "count_documents_found_plural": "{{ count }} documents found",
          "no_documents_were_found": "No documents were found"
        },
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v2.0',
            },
            
          },          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Godspeed',
        logo: {
          alt: 'Godspeed Logo',
          src: 'img/Gs-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            // title: 'Godspeed',
            // items: [
            //   {
            //     label: 'Documentation',
            //     to: '/docs/intro',
            //   },
            // ],
          },
          {
            items: [
              {
                label: 'Forum',
                href: 'https://forum.godspeed.systems',
              },

            ],
          },


          {
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/MKjv3KdD7X',
              },
            ],
          },
          {
            items: [
              {
                label: 'Github',
                href: 'https://github.com/godspeedsystems',
              },
            ],
          },
          {
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/GodspeedSystem',
              },
            ],
          },
          {
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/godspeed-systems/',
              },
            ],
          },

          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
