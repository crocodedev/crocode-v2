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
  contentRaw: {
    children: {
      text: string;
    }[];
  }[];
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
            src: '/images/technologies/front-end/js.svg',
            alt: 'JavaScript image',
          },
        },
        {
          title: 'TypeScript',
          image: {
            src: '/images/technologies/front-end/ts.svg',
            alt: 'TypeScript image',
          },
        },
        {
          title: 'Gatsby',
          image: {
            src: '/images/technologies/front-end/gatsby.svg',
            alt: 'Gatsby image',
          },
        },
        {
          title: 'React',
          image: {
            src: '/images/technologies/front-end/react.svg',
            alt: 'React image',
          },
        },
        {
          title: 'Next.js',
          image: {
            src: '/images/technologies/front-end/next.svg',
            alt: 'Next.js image',
          },
        },
        {
          title: 'Svelte',
          image: {
            src: '/images/technologies/front-end/svelte.svg',
            alt: 'Svelte image',
          },
        },
        {
          title: 'Vue',
          image: {
            src: '/images/technologies/front-end/vue.svg',
            alt: 'Vue image',
          },
        },
        {
          title: 'Nuxt.js',
          image: {
            src: '/images/technologies/front-end/nuxt.svg',
            alt: 'Nuxt.js image',
          },
        },
        {
          title: 'Pixi.js',
          image: {
            src: '/images/technologies/front-end/pixiJs.svg',
            alt: 'Pixi.js image',
          },
        },
        {
          title: 'HTML',
          image: {
            src: '/images/technologies/front-end/html.svg',
            alt: 'HTML image',
          },
        },
        {
          title: 'CSS',
          image: {
            src: '/images/technologies/front-end/css.svg',
            alt: 'CSS image',
          },
        },
        {
          title: 'Bootstrap',
          image: {
            src: '/images/technologies/front-end/Bootstrap.svg',
            alt: 'Bootstrap image',
          },
        },
        {
          title: 'ChakraUI',
          image: {
            src: '/images/technologies/front-end/chakraUI.svg',
            alt: 'ChakraUI image',
          },
        },
        {
          title: 'Angular',
          image: {
            src: '/images/technologies/front-end/angular.svg',
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
            src: '/images/technologies/back-end/Python.svg',
            alt: 'Python image',
          },
        },
        {
          title: 'Symfony',
          image: {
            src: '/images/technologies/back-end/Symfony.svg',
            alt: 'Symfony image',
          },
        },
        {
          title: 'Laravel',
          image: {
            src: '/images/technologies/back-end/laravel.svg',
            alt: 'Laravel image',
          },
        },
        {
          title: 'Express',
          image: {
            src: '/images/technologies/back-end/Express.svg',
            alt: 'Express image',
          },
        },
        {
          title: 'NestJS',
          image: {
            src: '/images/technologies/back-end/NestJS.svg',
            alt: 'NestJS image',
          },
        },
        {
          title: 'C++',
          image: {
            src: '/images/technologies/back-end/c-plus-plus.svg',
            alt: 'C++ image',
          },
        },
        {
          title: 'Liquid',
          image: {
            src: '/images/technologies/back-end/Liquid.svg',
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
            src: '/images/technologies/mobile/react.svg',
            alt: 'React Native image',
          },
        },
        {
          title: 'Pixi.js',
          image: {
            src: '/images/technologies/mobile/pixiJs.svg',
            alt: 'Pixi.js image',
          },
        },
        {
          title: 'Haxe',
          image: {
            src: '/images/technologies/mobile/Haxe.svg',
            alt: 'Haxe image',
          },
        },
        {
          title: 'Electron.js',
          image: {
            src: '/images/technologies/mobile/Electron.js.svg',
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
            src: '/images/technologies/headless-cms/Contentful.svg',
            alt: 'Contentful image',
          },
        },
        {
          title: 'Strapi',
          image: {
            src: '/images/technologies/headless-cms/Strapi.svg',
            alt: 'Strapi image',
          },
        },
        {
          title: 'Sanity',
          image: {
            src: '/images/technologies/headless-cms/Sanity.svg',
            alt: 'Sanity image',
          },
        },
        {
          title: 'Netlify',
          image: {
            src: '/images/technologies/headless-cms/Netlify.svg',
            alt: 'Netlify image',
          },
        },
        {
          title: 'Dato',
          image: {
            src: '/images/technologies/headless-cms/Dato.svg',
            alt: 'Dato image',
          },
        },
        {
          title: 'WordPress (Atlas)',
          image: {
            src: '/images/technologies/headless-cms/WordPress.svg',
            alt: 'WordPress (Atlas) image',
          },
        },
        {
          title: 'Shopify',
          image: {
            src: '/images/technologies/headless-cms/Shopify.svg',
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
            src: '/images/technologies/game-engine/unreal.svg',
            alt: 'Unreal engine image',
          },
        },
        {
          title: 'Unity',
          image: {
            src: '/images/technologies/game-engine/unity.svg',
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
            src: '/images/technologies/e-commerce/Shopify.svg',
            alt: 'Shopify image',
          },
        },
        {
          title: 'Shopify plus',
          image: {
            src: '/images/technologies/e-commerce/Shopify-plus.svg',
            alt: 'Shopify plus image',
          },
        },
        {
          title: 'Hydrogen',
          image: {
            src: '/images/technologies/e-commerce/Hydrogen.svg',
            alt: 'Hydrogen image',
          },
        },
        {
          title: 'Medusa.js',
          image: {
            src: '/images/technologies/e-commerce/Medusa.js.svg',
            alt: 'Medusa.js image',
          },
        },
        {
          title: 'Commercetools',
          image: {
            src: '/images/technologies/e-commerce/Commercetools.svg',
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
            src: '/images/technologies/industries/e-Commerce.svg',
            alt: 'e-Commerce image',
          },
        },
        {
          title: 'e-Learning',
          image: {
            src: '/images/technologies/industries/e-Learning.svg',
            alt: 'e-Learning image',
          },
        },
        {
          title: 'Helthcare',
          image: {
            src: '/images/technologies/industries/Helthcare.svg',
            alt: 'Helthcare image',
          },
        },
        {
          title: 'Financial  ',
          image: {
            src: '/images/technologies/industries/Financial.svg',
            alt: 'Financial  image',
          },
        },
        {
          title: 'Logistics & Transportation',
          image: {
            src: '/images/technologies/industries/LogisticsAndTransportation.svg',
            alt: 'Logistics & Transportation image',
          },
        },
        {
          title: 'Iot',
          image: {
            src: '/images/technologies/industries/IoT.svg',
            alt: 'Iot image',
          },
        },
        {
          title: 'Digital marketing',
          image: {
            src: '/images/technologies/industries/Digital-marketing.svg',
            alt: 'Digital marketing image',
          },
        },
        {
          title: 'Game development',
          image: {
            src: '/images/technologies/industries/Game-development.svg',
            alt: 'Game development image',
          },
        },
        {
          title: 'AL',
          image: {
            src: '/images/technologies/industries/AI.svg',
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
            src: '/images/technologies/e-commerce/Shopify.svg',
            alt: 'e-Commerce image',
          },
        },
        {
          title: 'Shopify/Shopify plus development',
          image: {
            src: '/images/technologies/e-commerce/Shopify.svg',
            alt: 'Shopify/Shopify plus development image',
          },
        },
        {
          title: 'Jamstack',
          image: {
            src: '/images/technologies/services/Jamstack.svg',
            alt: 'Jamstack image',
          },
        },
        {
          title: 'Custom Software development   ',
          image: {
            src: '/images/technologies/services/Custom-Software.svg',
            alt: 'Custom Software development   image',
          },
        },
        {
          title: 'Mobile',
          image: {
            src: '/images/technologies/services/Mobile.svg',
            alt: 'Mobile image',
          },
        },
        {
          title: 'Cross-Platform development',
          image: {
            src: '/images/technologies/services/Cross-Platform.svg',
            alt: 'Cross-Platform development image',
          },
        },
        {
          title: 'Game development',
          image: {
            src: '/images/technologies/services/Game-development.svg',
            alt: 'Game development image',
          },
        },
        {
          title: 'UI/UX design',
          image: {
            src: '/images/technologies/services/UI-UX.svg',
            alt: 'UI/UX design image',
          },
        },
        {
          title: 'Project management',
          image: {
            src: '/images/technologies/services/Project-management.svg',
            alt: 'Project management image',
          },
        },
        {
          title: 'Computer Vision Development',
          image: {
            src: '/images/technologies/services/Computer-Vision-Development.svg',
            alt: 'Computer Vision Development image',
          },
        },
        {
          title: 'Startup and MVP Services',
          image: {
            src: '/images/technologies/services/Startup-and-MVP-Services.svg',
            alt: 'Startup and MVP Services image',
          },
        },
        {
          title: 'PWA Development Services',
          image: {
            src: '/images/technologies/services/PWA-Development-Services.svg',
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
            src: '/images/technologies/other/RestAPI.svg',
            alt: 'Rest API image',
          },
        },
        {
          title: 'GraphQL',
          image: {
            src: '/images/technologies/other/GraphQL.svg',
            alt: 'GraphQL image',
          },
        },
        {
          title: 'GROQ',
          image: {
            src: '/images/technologies/other/GROQ.svg',
            alt: 'GROQ image',
          },
        },
        {
          title: 'Docker ',
          image: {
            src: '/images/technologies/other/Docker.svg',
            alt: 'Docker image',
          },
        },
        {
          title: 'Kubernetes',
          image: {
            src: '/images/technologies/other/Kubernetes.svg',
            alt: 'Kubernetes image',
          },
        },
        {
          title: 'Apollo',
          image: {
            src: '/images/technologies/other/Apollo.svg',
            alt: 'Apollo image',
          },
        },
        {
          title: 'Webpack',
          image: {
            src: '/images/technologies/other/Webpack.svg',
            alt: 'Webpack image',
          },
        },
        {
          title: 'Gulp',
          image: {
            src: '/images/technologies/other/Gulp.svg',
            alt: 'Gulp image',
          },
        },
        {
          title: 'npm',
          image: {
            src: '/images/technologies/other/npm.svg',
            alt: 'npm image',
          },
        },
        {
          title: 'Yarn',
          image: {
            src: '/images/technologies/other/yarn.svg',
            alt: 'yarn image',
          },
        },
        {
          title: 'Babel',
          image: {
            src: '/images/technologies/other/babel.svg',
            alt: 'Babel image',
          },
        },
        {
          title: 'Storybook',
          image: {
            src: '/images/technologies/other/Storybook.svg',
            alt: 'Storybook image',
          },
        },
      ],
    },
  ],
};
