import { themes } from 'prism-react-renderer'
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic'

const lightTheme = themes.github;
const darkTheme = themes.dracula;

const config: Config = {
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
      {
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
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
          { to: "javascript", label: "javascript", position: "left" },
          { to: "interview", label: "面试题", position: "left" },
          { to: "algorithm", label: "算法基础", position: "left" },
          { to: "blog", label: "博客", position: "left" },
          { to: "/leetcode", label: "算法记录", position: "right" },
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
        copyright: `Copyright © ${new Date().getFullYear()} 假鸟乖. Built with <a href='https://docusaurus.io/zh-CN/' target='_blank'>Docusaurus.</a>`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
  plugins: [
    [
      "./plugins/generate-tree",
      {
        paths: ["./src/pages/leetcode"],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'interview',
        path: 'interview',
        routeBasePath: 'interview',
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'js',
        path: 'js',
        routeBasePath: 'javascript',
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algorithm',
        path: 'algorithm',
        routeBasePath: 'algorithm',
        sidebarPath: "./sidebars.js",
      },
    ],
  ],
};

export default config
