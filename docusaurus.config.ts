import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Public Data Trust',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://publicdatatrust.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Avinadal-LLC', // Usually your GitHub org/user name.
  projectName: 'Public-Data-Trust', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {                              
          routeBasePath: 'database',          
          sidebarPath: './sidebarDocs.ts',
          editUrl: undefined,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false, // Disable the color mode switch
      respectPrefersColorScheme: true, // Respect user's system preference
    },   
    image: 'img/MetaImage.jpg',
    navbar: {
      title: 'Public Data Trust',
      logo: {
        alt: 'Public Data Trust Logo',
        src: 'img/PDT-Logo-Transparent.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Database',
        },
        {to: '/contact', label: 'Contact', position: 'left'},           
      ],
    },
    footer: {
      style: 'dark',      
      copyright: `<span class="pdt-footer">Information contained in this archive is property of the Hadieia Galactic Federation and PDT Foundation. Access is governed by Public Trust Dissemination Policy 4.0.</span><br/><span class="pdt-footer">This site uses cookies to tailor your experience. No personal data is tracked or shared. See our <a rel="privacy-policy" href="/privacy-policy" class="footer__link">Privacy Policy</a> for details.</span><span class="real-footer" xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"> <a property="dct:title" rel="cc:attributionURL" href="#">Public Data Trust</a> © 2025-${new Date().getFullYear()} by <a href="https://avinadal.net">Avinadal LLC</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://avinadal.net" target="_blank">Avinadal LLC</a> </span>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
