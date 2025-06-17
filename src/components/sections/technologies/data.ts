import { TImage } from '@/types/types';

type TData = {
  title: string;
  categories: {
    title: string;
    technologiesList: {
      title: string;
      image: TImage;
    }[];
  }[];
};

export const data: TData = {
  title: ' Technologies',
  categories: [
    {
      title: 'Front-End Development',
      technologiesList: [
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
      ],
    },
    {
      title: 'Back-End Development',
      technologiesList: [
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
      ],
    },
    {
      title: 'Mobile',
      technologiesList: [
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
      ],
    },
  ],
};
