import {
  AboutUs,
  ContactUsForm,
  Hero,
  OfferingsTemplate,
  Questions,
} from '@/components/sections';

export const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'our services',
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
  offeringsTemplate: {
    title: 'what we can',
    modelsIsShow: true,
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

const ServicesPage = () => {
  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <OfferingsTemplate {...PROPS_SECTIONS.offeringsTemplate} />
      <Questions />
      <AboutUs {...PROPS_SECTIONS.aboutUs} />
      <ContactUsForm />
    </>
  );
};

export default ServicesPage;
