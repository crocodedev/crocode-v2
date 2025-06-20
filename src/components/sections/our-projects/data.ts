import { AnchorType } from '@/components/ui/title/types';

import { TImage, TLink } from '@/types/types';

type TData = {
  title: string;
  anchor?: AnchorType;
  cards: [{ image: TImage; link: TLink }, { image: TImage; link: TLink }];
};

export const data: TData = {
  title: 'OUR PROJECTS',
  cards: [
    {
      image: {
        src: '/images/our-project.png',
        alt: 'Show More',
      },
      link: {
        href: '/',
        text: '',
      },
    },
    {
      image: {
        src: '/images/our-project-2.png',
        alt: 'Show More',
      },
      link: {
        href: '/',
        text: '',
      },
    },
  ],
};
