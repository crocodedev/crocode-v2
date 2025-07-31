import { AnchorType } from '@/components/ui/title/types';

import { TImage } from '@/types/types';

export type TData = {
  title?: string;
  anchor?: AnchorType;
  cards?: { image: TImage; href: string }[];
};

export const data: TData = {
  title: 'OUR PROJECTS',
  cards: [
    {
      image: {
        src: '/images/our-project.png',
        alt: 'Show More',
      },
      href: '/cases/arcus',
    },
    {
      image: {
        src: '/images/our-project-2.png',
        alt: 'Show More',
      },
      href: '/cases/bearbricks',
    },
  ],
};
