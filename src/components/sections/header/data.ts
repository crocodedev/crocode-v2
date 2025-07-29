import { TLink } from '@/types/types';

type THeader = {
  button: string;
  links: TLink[];
};

export const data: THeader = {
  button: 'Contact us',
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Services',
      href: '/our-services',
    },
    {
      text: 'Portfolio',
      href: `/cases`,
    },
    {
      text: 'Technologies',
      href: '/technologies',
    },
    {
      text: 'About us',
      href: '/about-us',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ],
};
