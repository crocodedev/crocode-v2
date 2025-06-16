import {
  AboutUs,
  Banner,
  Blog,
  ContactUsForm,
  GetStarted,
  Hero,
  Industries,
  OfferingsTemplate,
  OurProject,
  Technologies,
} from '@/components/sections';

import { TImage } from '@/types/image';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'crocode',
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
  industries: {
    title: 'Industries',
    items: [
      {
        number: '01',
        link: {
          text: 'eCommerce',
          href: '/',
        },
      },
      {
        number: '02',
        link: {
          text: 'Web',
          href: '/',
        },
      },
      {
        number: '03',
        link: {
          text: 'Mobile',
          href: '/',
        },
      },
      {
        number: '04',
        link: {
          text: 'GameDev',
          href: '/',
        },
      },
    ],
  },
  offeringsTemplate: {
    title: 'Services',
    items: ['01', '02', '03', '04'] as [string, string, string, string],
    modelsIsShow: false,
  },
  banner: {
    title: 'About Crocode',
    texts: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci expedita officia odit enim porro delectus suscipit vel aperiam! Dignissimos qui nesciunt culpa recusandae quisquam, maxime enim animi quae molestiae voluptatem!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illum vitae porro sapiente ea ut mollitia illo odit neque veritatis. Necessitatibus quam quis voluptatem distinctio amet sequi rem quas repudiandae.',
    ],
    showModels: false,
  },
  technologies: {
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
  },
  getStarted: {
    title: 'Get started on your journey to digital transformation!',
    buttonLink: {
      text: 'Start project',
      href: '/',
    },
  },
  ourProject: {
    title: 'OUR PROJECTS',
    cards: [
      {
        src: '/images/more.png',
        alt: 'Show More',
      },
      {
        src: '/images/more.png',
        alt: 'Show More',
      },
      {
        src: '/images/more.png',
        alt: 'Show More',
      },
    ] as [TImage, TImage, TImage],
  },
  aboutUs: {
    title: ' say about us',
    users: [
      {
        name: 'Анна Петрова',
        avatarUrl: '/avatars/anna.jpg',
        comment: 'Очень понравился сервис! Всё быстро, удобно и качественно.',
      },
      {
        name: 'Иван Смирнов',
        avatarUrl: '/avatars/ivan.jpg',
        comment: 'Поддержка на высоте! Решили мой вопрос за 5 минут.',
      },
      {
        name: 'Екатерина Орлова',
        avatarUrl: '/avatars/ekaterina.jpg',
        comment: 'Пользуюсь уже полгода — всё работает стабильно.',
      },
      {
        name: 'Дмитрий Кузнецов',
        avatarUrl: '/avatars/dmitry.jpg',
        comment: 'Удобный интерфейс и приятный дизайн.',
      },
      {
        name: 'Мария Белова',
        avatarUrl: '/avatars/maria.jpg',
        comment: 'Рекомендую всем друзьям — лучший опыт за последнее время!',
      },
      {
        name: 'Алексей Соколов',
        avatarUrl: '/avatars/alexey.jpg',
        comment: 'Поначалу сомневался, но теперь очень доволен.',
      },
    ],
  },
  blog: {
    title: 'BLOG',
    cards: ['1', '2', '3', '4'],
    linkDetails: {
      text: 'Learn in detail',
      href: '/',
    },
  },
  contactUs: {
    image: {
      src: '/image.png',
      alt: 'image',
    },
  },
};

const HomePage = () => {
  return (
    <>
      <Hero
        title={PROPS_SECTIONS.hero.title}
        image={PROPS_SECTIONS.hero.image}
        modelsIsShow={PROPS_SECTIONS.hero.modelsIsShow}
      />
      <Industries
        title={PROPS_SECTIONS.industries.title}
        items={PROPS_SECTIONS.industries.items}
      />
      <OfferingsTemplate
        title={PROPS_SECTIONS.offeringsTemplate.title}
        items={PROPS_SECTIONS.offeringsTemplate.items}
        modelsIsShow={PROPS_SECTIONS.offeringsTemplate.modelsIsShow}
      />
      <Banner
        title={PROPS_SECTIONS.banner.title}
        texts={PROPS_SECTIONS.banner.texts}
        showModels={PROPS_SECTIONS.banner.showModels}
      />
      <Technologies
        title={PROPS_SECTIONS.technologies.title}
        categories={PROPS_SECTIONS.technologies.categories}
      />
      <GetStarted
        title={PROPS_SECTIONS.getStarted.title}
        buttonLink={PROPS_SECTIONS.getStarted.buttonLink}
      />
      <OurProject
        title={PROPS_SECTIONS.ourProject.title}
        cards={PROPS_SECTIONS.ourProject.cards}
      />
      <AboutUs
        title={PROPS_SECTIONS.aboutUs.title}
        users={PROPS_SECTIONS.aboutUs.users}
      />
      <Blog
        title={PROPS_SECTIONS.blog.title}
        cards={PROPS_SECTIONS.blog.cards}
        linkDetails={PROPS_SECTIONS.blog.linkDetails}
      />
      <ContactUsForm image={PROPS_SECTIONS.contactUs.image} />
    </>
  );
};

export default HomePage;
