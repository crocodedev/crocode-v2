import { PortableTextBlock } from '@portabletext/react';

import { TImage } from '@/types/types';

export type TTechnologies = {
  _id: string;
  _key: string;
  title: string;
  slug: { current: string };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  breadcrumbs: {
    _key: string;
    title: string;
    linkExternal?: { href: string; label: string; blank: boolean };
    linkInternal?: { label: string; reference?: { slug: { current: string } } };
  }[];
  contentRaw: PortableTextBlock;
  projects: {
    title: string;
    slug: {
      current: string;
    };
    casesItemImage: {
      image: {
        asset: {
          url: string;
        };
      };
      altText: string;
    };
  }[];
  questions: {
    question: string;
    answer: string;
  }[];
  process: {
    titleItem: string;
    description: string;
  }[];
};

type TData = {
  title: string;
  categories: {
    title: string;
    technologiesList: {
      title: string;
      image: TImage;
      link?: string;
    }[];
  }[];
};

export const data: TData = {
  title: ' Technologies',
  categories: [
    {
      title: 'Front-End',
      technologiesList: [
        {
          title: 'JavaScript',
          image: {
            src: '/images/technologies/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'TypeScript',
          image: {
            src: '/images/technologies/ts.svg',
            alt: 'TypeScript image',
          },
        },
        {
          title: 'Gatsby',
          image: {
            src: '/images/technologies/Gatsby.svg',
            alt: 'Gatsby image',
          },
        },
        {
          title: 'React',
          image: {
            src: '/images/technologies/react.svg',
            alt: 'React image',
          },
        },
        {
          title: 'Next.js',
          image: {
            src: '/images/technologies/next.svg',
            alt: 'Next.js image',
          },
        },
        {
          title: 'Svelte',
          image: {
            src: '/images/technologies/svelte.svg',
            alt: 'Svelte image',
          },
        },
        {
          title: 'Vue',
          image: {
            src: '/images/technologies/Vue.svg',
            alt: 'Vue image',
          },
        },
        {
          title: 'Nuxt.js',
          image: {
            src: '/images/technologies/nuxt.svg',
            alt: 'Nuxt.js image',
          },
        },
        {
          title: 'Pixi.js',
          image: {
            src: '/images/technologies/pixiJs.svg',
            alt: 'Pixi.js image',
          },
        },
        {
          title: 'HTML',
          image: {
            src: '/images/technologies/html.svg',
            alt: 'HTML image',
          },
        },
        {
          title: 'CSS',
          image: {
            src: '/images/technologies/css.svg',
            alt: 'CSS image',
          },
        },
        {
          title: 'Bootstrap',
          image: {
            src: '/images/technologies/Bootstrap.svg',
            alt: 'Bootstrap image',
          },
        },
        {
          title: 'ChakraUI',
          image: {
            src: '/images/technologies/ChakraUI.svg',
            alt: 'ChakraUI image',
          },
        },
        {
          title: 'Angular',
          image: {
            src: '/images/technologies/angular.svg',
            alt: 'Angular image',
          },
        },
      ],
    },
    {
      title: 'Back-End',
      technologiesList: [
        {
          title: 'Python',
          image: {
            src: '/images/technologies/Python.svg',
            alt: 'Python image',
          },
        },
        {
          title: 'Symfony',
          image: {
            src: '/images/technologies/Symfony.svg',
            alt: 'Symfony image',
          },
        },
        {
          title: 'Laravel',
          image: {
            src: '/images/technologies/Laravel.svg',
            alt: 'Laravel image',
          },
        },
        {
          title: 'Express',
          image: {
            src: '/images/technologies/Express.svg',
            alt: 'Express image',
          },
        },
        {
          title: 'NestJS',
          image: {
            src: '/images/technologies/NestJS.svg',
            alt: 'NestJS image',
          },
        },
        {
          title: 'C++',
          image: {
            src: '/images/technologies/C-plus-plus.svg',
            alt: 'C++ image',
          },
        },
        {
          title: 'Liquid',
          image: {
            src: '/images/technologies/Liquid.svg',
            alt: 'Liquid image',
          },
        },
      ],
    },
    {
      title: 'Mobile',
      technologiesList: [
        {
          title: 'React Native',
          image: {
            src: '/images/technologies/react.svg',
            alt: 'React Native image',
          },
        },
        {
          title: 'Pixi.js',
          image: {
            src: '/images/technologies/pixiJs.svg',
            alt: 'Pixi.js image',
          },
        },
        {
          title: 'Haxe',
          image: {
            src: '/images/technologies/Haxe.svg',
            alt: 'Haxe image',
          },
        },
        {
          title: 'Electron.js',
          image: {
            src: '/images/technologies/Electron.js.svg',
            alt: 'Electron.js image',
          },
        },
      ],
    },
    {
      title: 'Headless CMS',
      technologiesList: [
        {
          title: 'Contentful',
          image: {
            src: '/images/technologies/Contentful.svg',
            alt: 'Contentful image',
          },
        },
        {
          title: 'Strapi',
          image: {
            src: '/images/technologies/Strapi.svg',
            alt: 'Strapi image',
          },
        },
        {
          title: 'Sanity',
          image: {
            src: '/images/technologies/Sanity.svg',
            alt: 'Sanity image',
          },
        },
        {
          title: 'Netlify',
          image: {
            src: '/images/technologies/Netlify.svg',
            alt: 'Netlify image',
          },
        },
        {
          title: 'Dato',
          image: {
            src: '/images/technologies/Dato.svg',
            alt: 'Dato image',
          },
        },
        {
          title: 'WordPress (Atlas)',
          image: {
            src: '/images/technologies/WordPress.svg',
            alt: 'WordPress (Atlas) image',
          },
        },
        {
          title: 'Shopify',
          image: {
            src: '/images/technologies/Shopify.svg',
            alt: 'Shopify image',
          },
        },
      ],
    },
    {
      title: 'Game Engine',
      technologiesList: [
        {
          title: 'Unreal engine',
          image: {
            src: '/images/technologies/Unreal.svg',
            alt: 'Unreal engine image',
          },
        },
        {
          title: 'Unity',
          image: {
            src: '/images/technologies/Unity.svg',
            alt: 'Unity image',
          },
        },
      ],
    },
    {
      title: 'e-Commerce',
      technologiesList: [
        {
          title: 'Shopify',
          image: {
            src: '/images/technologies/Shopify.svg',
            alt: 'Shopify image',
          },
        },
        {
          title: 'Shopify plus',
          image: {
            src: '/images/technologies/Shopify-plus.svg',
            alt: 'Shopify plus image',
          },
        },
        {
          title: 'Hydrogen',
          image: {
            src: '/images/technologies/Hydrogen.svg',
            alt: 'Hydrogen image',
          },
        },
        {
          title: 'Medusa.js',
          image: {
            src: '/images/technologies/Medusa.js.svg',
            alt: 'Medusa.js image',
          },
        },
        {
          title: 'Commercetools',
          image: {
            src: '/images/technologies/Commercetools.svg',
            alt: 'Commercetools image',
          },
        },
      ],
    },
    {
      title: 'Industries',
      technologiesList: [
        {
          title: 'e-Commerce',
          image: {
            src: '/images/technologies/e-Commerce.svg',
            alt: 'e-Commerce image',
          },
        },
        {
          title: 'e-Learning',
          image: {
            src: '/images/technologies/e-Learning.svg',
            alt: 'e-Learning image',
          },
        },
        {
          title: 'Helthcare',
          image: {
            src: '/images/technologies/Helthcare.svg',
            alt: 'Helthcare image',
          },
        },
        {
          title: 'Financial  ',
          image: {
            src: '/images/technologies/Financial.svg',
            alt: 'Financial  image',
          },
        },
        {
          title: 'Logistics & Transportation',
          image: {
            src: '/images/technologies/LogisticsAndTransportation.svg',
            alt: 'Logistics & Transportation image',
          },
        },
        {
          title: 'Iot',
          image: {
            src: '/images/technologies/Iot.svg',
            alt: 'Iot image',
          },
        },
        {
          title: 'Digital marketing',
          image: {
            src: '/images/technologies/Digital-marketing.svg',
            alt: 'Digital marketing image',
          },
        },
        {
          title: 'Game development',
          image: {
            src: '/images/technologies/Game-development.svg',
            alt: 'Game development image',
          },
        },
        {
          title: 'AL',
          image: {
            src: '/images/technologies/Ai.svg',
            alt: 'AL image',
          },
        },
      ],
    },
    {
      title: 'Services',
      technologiesList: [
        {
          title: 'e-Commerce',
          image: {
            src: '/images/technologies/e-Commerce.svg',
            alt: 'e-Commerce image',
          },
        },
        {
          title: 'Shopify/Shopify plus development',
          image: {
            src: '/images/technologies/Shopify.svg',
            alt: 'Shopify/Shopify plus development image',
          },
        },
        {
          title: 'Jamstack',
          image: {
            src: '/images/technologies/Jamstack.svg',
            alt: 'Jamstack image',
          },
        },
        {
          title: 'Custom Software development   ',
          image: {
            src: '/images/technologies/Custom-Software.svg',
            alt: 'Custom Software development   image',
          },
        },
        {
          title: 'Mobile',
          image: {
            src: '/images/technologies/Mobile.svg',
            alt: 'Mobile image',
          },
        },
        {
          title: 'Cross-Platform development',
          image: {
            src: '/images/technologies/Cross-Platform.svg',
            alt: 'Cross-Platform development image',
          },
        },
        {
          title: 'Game development',
          image: {
            src: '/images/technologies/Game-development.svg',
            alt: 'Game development image',
          },
        },
        {
          title: 'UI/UX design',
          image: {
            src: '/images/technologies/UI-UX.svg',
            alt: 'UI/UX design image',
          },
        },
        {
          title: 'Project management',
          image: {
            src: '/images/technologies/Project-management.svg',
            alt: 'Project management image',
          },
        },
        {
          title: 'Computer Vision Development',
          image: {
            src: '/images/technologies/Computer-Vision-Development.svg',
            alt: 'Computer Vision Development image',
          },
        },
        {
          title: 'Startup and MVP Services',
          image: {
            src: '/images/technologies/Startup-and-MVP-Services.svg',
            alt: 'Startup and MVP Services image',
          },
        },
        {
          title: 'PWA Development Services',
          image: {
            src: '/images/technologies/PWA-Development-Services.svg',
            alt: 'PWA Development Services image',
          },
        },
      ],
    },
    {
      title: 'Other',
      technologiesList: [
        {
          title: 'Rest API',
          image: {
            src: '/images/technologies/RestAPI.svg',
            alt: 'Rest API image',
          },
        },
        {
          title: 'GraphQL',
          image: {
            src: '/images/technologies/GraphQL.svg',
            alt: 'GraphQL image',
          },
        },
        {
          title: 'GROQ',
          image: {
            src: '/images/technologies/GROQ.svg',
            alt: 'GROQ image',
          },
        },
        {
          title: 'Docker ',
          image: {
            src: '/images/technologies/Docker.svg',
            alt: 'Docker image',
          },
        },
        {
          title: 'Kubernetes',
          image: {
            src: '/images/technologies/Kubernetes.svg',
            alt: 'Kubernetes image',
          },
        },
        {
          title: 'Apollo',
          image: {
            src: '/images/technologies/Apollo.svg',
            alt: 'Apollo image',
          },
        },
        {
          title: 'Webpack',
          image: {
            src: '/images/technologies/Webpack.svg',
            alt: 'Webpack image',
          },
        },
        {
          title: 'Gulp',
          image: {
            src: '/images/technologies/Gulp.svg',
            alt: 'Gulp image',
          },
        },
        {
          title: 'npm',
          image: {
            src: '/images/technologies/npm.svg',
            alt: 'npm image',
          },
        },
        {
          title: 'Yarn',
          image: {
            src: '/images/technologies/Yarn.svg',
            alt: 'yarn image',
          },
        },
        {
          title: 'Babel',
          image: {
            src: '/images/technologies/Babel.svg',
            alt: 'Babel image',
          },
        },
        {
          title: 'Storybook',
          image: {
            src: '/images/technologies/Storybook.svg',
            alt: 'Storybook image',
          },
        },
      ],
    },
  ],
};
