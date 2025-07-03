import { TLink } from '@/types/types';

type TData = {
  title: string;
  items: {
    link: TLink;
  }[];
  color?: `green` | `black` | `grey`;
};

export const data: TData = {
  title: 'Industries',
  items: [
    {
      link: {
        text: 'eCommerce',
        href: '/',
      },
    },
    {
      link: {
        text: 'Web',
        href: '/',
      },
    },
    {
      link: {
        text: 'Mobile',
        href: '/',
      },
    },
    {
      link: {
        text: 'GameDev',
        href: '/',
      },
    },
  ],
};
