import { GetServerSideProps } from 'next';

import {
  AboutUs,
  ContactUsForm,
  Hero,
  OfferingsTemplate,
  Questions,
  Breadcrumbs,
} from '@/components/sections';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';
import { TBreadcrumbs } from '@/components/sections/breadcrumbs/type';

import { getSeoProps } from '@/utils/seo';
import { getBreadcrumbs } from '@/graphql/queries/breadcrumbs';

import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';

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

type TProps = TPageProps & {
  breadcrumbs: {
    data: TBreadcrumbs;
    error: string;
  };
};

const ServicesPage = ({ allRedirects, seo, breadcrumbs }: TProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Breadcrumbs sanityData={breadcrumbs?.data} />
      <OfferingsTemplate {...PROPS_SECTIONS.offeringsTemplate} />
      <Questions />
      <AboutUs {...PROPS_SECTIONS.aboutUs} />
      <ContactUsForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TPageProps> = async (
  context,
) => {
  const slug = context.resolvedUrl;

  const { allRedirects, seo } = await getSeoProps(slug);
  const { data: dataBreadcrumbs, errors: errorsBreadcrumbs } =
    await fetchGraphQL(getBreadcrumbs(slug));

  return {
    props: {
      allRedirects,
      seo,
      breadcrumbs: {
        error: errorsBreadcrumbs ?? null,
        data: dataBreadcrumbs?.allPage[0].breadcrumbs ?? null,
      },
    },
  };
};

export default ServicesPage;
