import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skyblock Community Wiki',
  tagline: 'Farm smarter, not harder',
  favicon: 'img/skyblock_icon.webp',

  url: 'https://venustraphobie.github.io',
  baseUrl: '/Skyblock-Community-Wiki/',
  organizationName: 'venustraphobie', 
  projectName: 'Skyblock-Community-Wiki',
  onBrokenLinks: 'warn',
  
  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
        en: {
            htmlLang: 'en-US',
            label: 'English'
        },
        de: {
            htmlLang: 'de',
            label: 'Deutsch'
        }
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/skyblock_icon.webp',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    navbar: {
      title: 'Skyblock Community Wiki',
      logo: {
        alt: 'Skyblock Logo',
        src: 'img/skyblock_icon.webp',
      },
      items: [
        {
          href: 'https://github.com/venustraphobie/skyblock-community-wiki',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ]
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
