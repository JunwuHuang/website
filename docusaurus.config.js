// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "假鸟乖",
  tagline:
    "There is no point in me doing things that I can't be myself. --Better Call Saul",
  url: "https://junwuhuang.github.io/",
  baseUrl: "/website/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "JunwuHuang", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'zh-Hans',
  //   locales: ['zh-Hans', 'en'],
  // },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "假鸟乖",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "每周积累",
          },
          { to: "/leetcode", label: "算法记录", position: "left" },
          {
            href: "https://github.com/JunwuHuang/website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "每周积累",
                to: "/docs",
              },
              {
                label: "算法记录",
                to: "/leetcode/",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Github: JunwuHuang",
                href: "https://github.com/JunwuHuang",
              },
              {
                label: "E-mail: 978162622@qq.com",
                href: "mailto:978162622@qq.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/JunwuHuang/website",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 假鸟乖. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "./plugins/generate-tree",
      {
        paths: ["./src/pages/leetcode"],
      },
    ],
  ],
};

module.exports = config;
