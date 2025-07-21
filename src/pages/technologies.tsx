import { GetServerSideProps } from 'next';

import { Hero, TechnologyStack } from '@/components/sections';
import { TTechnologieCard } from '@/components/sections/technology-stack/types';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { ALL_TECHNOLOGIES } from '@/graphql/queries/technologies';
import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'OUR TECHNOLOGY STACK',
  },
};

type TProps = TPageProps & {
  categories: TTechnologieCard[];
};

const TechnologiesPage = ({ allRedirects, seo, categories }: TProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <TechnologyStack categories={categories} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TPageProps> = async (
  context,
) => {
  const slug = context.resolvedUrl;
  const { data, errors } = await fetchGraphQL(ALL_TECHNOLOGIES);
  const categories = data?.allTechnologies[0].categories;

  const DATA_ITEMS = [
    'Mobile',
    'E-Commerce Platform',
    'Back-end Development',
    'Headless CMS',
    'Other',
    'Game Engine ',
    'Industries',
    'Front-end Development',
    'Services',
  ];

  const sortedCategories = DATA_ITEMS.map((title) =>
    categories.find(
      (cat: { title: string }) =>
        cat.title.toLowerCase() === title.toLowerCase(),
    ),
  ).filter(Boolean);

  return {
    props: {
      categories: sortedCategories ?? null,
      errors: errors ?? null,
      seo: (await getSeoProps(slug)).seo,
      allRedirects: (await getSeoProps(slug)).allRedirects,
    },
  };
};

export default TechnologiesPage;
