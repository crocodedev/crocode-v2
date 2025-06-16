import {
  AboutUs,
  ContactUsForm,
  Hero,
  OfferingsTemplate,
  Questions,
} from '@/components/sections';

export const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'our services',
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
  offeringsTemplate: {
    title: 'Services',
    items: ['01', '02', '03', '04'] as [string, string, string, string],
    modelsIsShow: false,
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
  contactUs: {
    image: {
      src: '/image.png',
      alt: 'image',
    },
  },
};

const Services = () => {
  return (
    <>
      <Hero
        title={PROPS_SECTIONS.hero.title}
        modelsIsShow={PROPS_SECTIONS.hero.modelsIsShow}
        image={PROPS_SECTIONS.hero.image}
      />
      <OfferingsTemplate
        title={PROPS_SECTIONS.offeringsTemplate.title}
        items={PROPS_SECTIONS.offeringsTemplate.items}
        modelsIsShow={PROPS_SECTIONS.offeringsTemplate.modelsIsShow}
      />
      <Questions />
      <AboutUs
        title={PROPS_SECTIONS.aboutUs.title}
        users={PROPS_SECTIONS.aboutUs.users}
      />
      <ContactUsForm />
    </>
  );
};

export default Services;
