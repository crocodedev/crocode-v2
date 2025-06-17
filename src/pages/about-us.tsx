import {
  AboutUs,
  Blog,
  ContactUsForm,
  GetStarted,
  Hero,
  OurFigures,
} from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'ABOUT US',
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
  blog: {
    title: 'BLOG',
    cards: ['1', '2', '3', '4'],
    linkDetails: {
      text: 'Learn in detail',
      href: '/',
    },
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
};

const AboutUsPage = () => {
  return (
    <>
      <Hero
        title={PROPS_SECTIONS.hero.title}
        image={PROPS_SECTIONS.hero.image}
        modelsIsShow={PROPS_SECTIONS.hero.modelsIsShow}
      />
      <OurFigures />
      <GetStarted />
      <Blog
        title={PROPS_SECTIONS.blog.title}
        cards={PROPS_SECTIONS.blog.cards}
        linkDetails={PROPS_SECTIONS.blog.linkDetails}
      />
      <AboutUs
        title={PROPS_SECTIONS.aboutUs.title}
        users={PROPS_SECTIONS.aboutUs.users}
      />
      <ContactUsForm />
    </>
  );
};

export default AboutUsPage;
