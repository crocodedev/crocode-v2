import { TImage } from '@/types/types';

type TCardData = {
  cards: TImage[];
  info: {
    title: string;
    description: string;
  }[];
};

export const cardData: TCardData = {
  cards: [
    {
      src: '/image.png',
      alt: 'image',
    },
    {
      src: '/image.png',
      alt: 'image',
    },
    {
      src: '/image.png',
      alt: 'image',
    },
    {
      src: '/image.png',
      alt: 'image',
    },
    {
      src: '/image.png',
      alt: 'image',
    },
  ],
  info: [
    {
      title: 'Tech',
      description: 'HTML, CSS, JavaScript, Shopify Liquid, PHP',
    },
    {
      title: 'Duration',
      description: '2 Months',
    },
    {
      title: 'Industry',
      description: 'Bags shop',
    },
    {
      title: 'Service',
      description: 'Visual fixes',
    },
  ],
};
