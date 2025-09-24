import { AnchorType } from '@/components/ui/title/types';

import { TImage } from '@/types/types';

export type TData = {
  title?: string;
  anchor?: AnchorType;
  cards?: { image: TImage; href: string }[];
  showMore?: string;
};

export const data: TData = {
  title: 'NASZE PROJEKTY',
  cards: [
    {
      image: {
        src: '/images/our-project.png',
        alt: 'Pokaż więcej',
      },
      href: '/projekty/arcus',
    },
    {
      image: {
        src: '/images/our-project-2.png',
        alt: 'Pokaż więcej',
      },
      href: '/projekty/bearbricks',
    },
  ],
  showMore: 'Pokaż więcej',
};
