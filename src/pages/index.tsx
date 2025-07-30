import { GetServerSideProps } from 'next';

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
import Seo from '@/components/seo';
import { AnchorType } from '@/components/ui/title/types';

import useRedirect from '@/hooks/useRedirect';

import { TLink } from '@/types/link';
import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'crocode',
    typeText: 'main',
  },
  offeringsTemplate: {
    title: 'Services',
    modelsIsShow: true,
    anchor: 'right' as AnchorType,
  },
  banner: {
    title: 'About Crocode',
    texts: [
      `Crocode is a go-to tech company providing a full-cycle of mobile and web application development, solutions to UX/UI design problems, business solutions for e-commerce and project management. We always focus on technical orientation to give you superior quality. Our team consists of developers who are able to work with a variety of technologies, such as: Shopify, JS, Gatsby.js, React and so on. Crocode Team is here to transform and expand your business through e-commerce and marketplaces.`,
    ],
    showModels: false,
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
      href: '/blog?category=Latest',
    } as TLink,
  },
};

const HomePage = ({ seo, allRedirects }: TPageProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Industries />
      <OfferingsTemplate {...PROPS_SECTIONS.offeringsTemplate} />
      <Banner {...PROPS_SECTIONS.banner} />
      <Technologies />
      <GetStarted />
      <OurProject />
      <AboutUs {...PROPS_SECTIONS.aboutUs} />
      <Blog {...PROPS_SECTIONS.blog} />
      <ContactUsForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TPageProps> = async (
  context,
) => {
  const slug = context.resolvedUrl;
  return {
    props: await getSeoProps(slug),
  };
};

export default HomePage;
