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
          href: '/dedykowane-zespoly',
        },
        {
          text: 'Rozwój mvp',
          href: '/rozwoj-mvp',
        },
        {
          text: 'Oprogramowanie na zamówienie',
          href: '/oprogramowanie-na-zamowienie',
        },
        {
          text: 'Ordynacyjny',
          href: '/',
        },
      ],
    },
    {
      title: {
        href: '/technologie',
        text: 'Technologie',
      },
      items: [
        {
          text: 'Tworzenie gier',
          href: '/tworzenie-gier',
        },
        {
          text: 'Tworzenie front-endu',
          href: '/tworzenie-front-endu',
        },
        {
          text: 'Tworzenie back-endu',
          href: '/tworzenie-back-endu',
        },
        {
          text: 'Tworzenie aplikacji mobilnych',
          href: '/rozwoj-mobilny',
        },
        {
          text: 'Tworzenie sklepów internetowych',
          href: '/rozwoj-handlu-elektronicznego',
        },
        {
          text: 'Rozwój Headless CMS',
          href: '/rozwoj-headless-cms',
        },
      ],
    },
    {
      title: {
        text: 'O nas',
        href: '/o-nas',
      },
      items: [
        {
          text: 'Blog',
          href: '/blog',
        },
        {
          text: 'Kontakt',
          href: '/kontakt',
        },
      ],
    },
  ],
};
