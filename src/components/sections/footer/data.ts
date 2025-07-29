import { IconFacebook, IconLinkedin, IconTwitter } from '@/components/icons';

import { TImage } from '@/types/types';
import { JSX } from 'react';

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
      alt: 'Twitter icon',
    },
    {
      icon: IconLinkedin,
      href: '/',
      alt: 'LinkedIn icon',
    },
    {
      icon: IconFacebook,
      href: '/',
      alt: 'Facebook icon',
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
          href: '/dedicated-team',
        },
        {
          text: 'MVP Development',
          href: '/mvp',
        },
        {
          text: 'Custom Software',
          href: '/custom-software-development',
        },
        {
          text: 'Consulting',
          href: '/',
        },
      ],
    },
    {
      title: {
        href: '/technologies',
        text: 'Technologies',
      },
      items: [
        {
          text: 'Game Development',
          href: '/game-dev',
        },
        {
          text: 'Front-end Development',
          href: '/front-end-development',
        },
        {
          text: 'Back-end Development',
          href: '/back-end-development',
        },
        {
          text: 'Mobile Development',
          href: '/mobile-development',
        },
        {
          text: 'E-commerce Development',
          href: '/e-commerce-development',
        },
        {
          text: 'Healdess CMS Development',
          href: '/headless-cms-development',
        },
      ],
    },
    {
      title: {
        text: 'About us',
        href: '/about-us',
      },
      items: [
        {
          text: 'Blog',
          href: '/blog',
        },
        {
          text: 'Contacts',
          href: '/contact-us',
        },
      ],
    },
  ],
};
