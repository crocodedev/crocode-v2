import { JSX } from 'react';

import { IconFacebook, IconLinkedin, IconTwitter } from '@/components/icons';

import { TImage } from '@/types/types';

type TLink = {
  href: string;
  alt?: string;
  text?: string;
};

type TFooter = {
  bottomLink: TLink;
  columns: {
    title: TLink;
    items: TLink[];
  }[];
  copyrightText: string;
  logoImage: TImage;
  socialIcons: {
    icon: () => JSX.Element;
    href: string;
    alt: string;
  }[];
};

export const data: TFooter = {
  bottomLink: {
    href: '/',
    text: 'Polityka prywatności',
  },
  logoImage: {
    src: '/images/logo.png',
    alt: 'Logo firmy Crocode',
  },
  socialIcons: [
    {
      icon: IconTwitter,
      href: '/',
      alt: 'Ikona Twittera',
    },
    {
      icon: IconLinkedin,
      href: '/',
      alt: 'Dołącz do nas na LinkedIn',
    },
    {
      icon: IconFacebook,
      href: '/',
      alt: 'Logo Facebook',
    },
  ],
  copyrightText: '© 2025 KROKOD Sp. z o.o. Wszelkie prawa zastrzeżone',
  columns: [
    {
      title: {
        href: '/',
        text: 'Usługi',
      },
      items: [
        {
          text: 'Dedykowane zespoły',
          href: '/dedicated-team',
        },
        {
          text: 'Tworzenie MVP',
          href: '/mvp',
        },
        {
          text: 'Oprogramowanie na zamówienie',
          href: '/custom-software-development',
        },
        {
          text: 'Ordynacyjny',
          href: '/',
        },
      ],
    },
    {
      title: {
        href: '/technologies',
        text: 'Technologie',
      },
      items: [
        {
          text: 'Tworzenie gier',
          href: '/game-dev',
        },
        {
          text: 'Tworzenie front-endu',
          href: '/front-end-development',
        },
        {
          text: 'Tworzenie back-endu',
          href: '/back-end-development',
        },
        {
          text: 'Tworzenie aplikacji mobilnych',
          href: '/mobile-development',
        },
        {
          text: 'Tworzenie sklepów internetowych',
          href: '/e-commerce-development',
        },
        {
          text: 'Rozwój Headless CMS',
          href: '/headless-cms-development',
        },
      ],
    },
    {
      title: {
        text: 'O nas',
        href: '/about-us',
      },
      items: [
        {
          text: 'Blog',
          href: '/blog',
        },
        {
          text: 'Kontakt',
          href: '/contact-us',
        },
      ],
    },
  ],
};
