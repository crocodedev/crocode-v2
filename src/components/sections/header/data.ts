import { TLink } from '@/types/types';

import { DEFAULT_VALUE_ALL_COUNTRY } from '@/graphql/queries/cases';

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
      href: `/cases?country=${DEFAULT_VALUE_ALL_COUNTRY}`,
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
