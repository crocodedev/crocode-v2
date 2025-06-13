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
      href: '/services',
    },
    {
      text: 'Portfolio',
      href: '/portfolio',
    },
    {
      text: 'Technologies',
      href: '/',
    },
    {
      text: 'About us',
      href: '/',
    },
    {
      text: 'Blog',
      href: '/',
    },
  ],
};
