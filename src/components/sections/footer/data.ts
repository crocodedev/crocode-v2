import { IconFacebook, IconLinkedin, IconTwitter } from '@/components/icons';

import { TImage, TLink } from '@/types/types';

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
  }[];
};

export const data: TFooter = {
  bottomLink: {
    href: '/',
    text: 'Privacy policy',
  },
  logoImage: {
    src: '/images/logo.png',
    alt: 'Logo image Crocode',
  },
  socialIcons: [
    {
      icon: IconTwitter,
      href: '/',
    },
    {
      icon: IconLinkedin,
      href: '/',
    },
    {
      icon: IconFacebook,
      href: '/',
    },
  ],
  copyrightText: '© 2025 KROKOD Sp. z o.o. All Rights Reserved',
  columns: [
    {
      title: {
        href: '/',
        text: 'Services',
      },
      items: [
        {
          text: 'Dedicated Teams',
          href: '/',
        },
        {
          text: 'MVP Development',
          href: '/',
        },
        {
          text: 'Custom Software',
          href: '/',
        },
        {
          text: 'Consulting',
          href: '/',
        },
      ],
    },
    {
      title: {
        href: '/',
        text: 'Technologies',
      },
      items: [
        {
          text: 'Game Development',
          href: '/',
        },
        {
          text: 'Front-end Development',
          href: '/',
        },
        {
          text: 'Back-end Development',
          href: '/',
        },
        {
          text: 'Mobile Development',
          href: '/',
        },
        {
          text: 'E-commerce Development',
          href: '/',
        },
        {
          text: 'Healdess CMS Development',
          href: '/',
        },
      ],
    },
    {
      title: {
        href: '/',
        text: 'About us',
      },
      items: [
        {
          text: 'Blog',
          href: '/',
        },
        {
          text: 'Contacts',
          href: '/contact-us',
        },
      ],
    },
  ],
};
