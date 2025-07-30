import { GetServerSideProps } from 'next';

import { Hero, TechnologyStack } from '@/components/sections';
import { TTechnologieCard } from '@/components/sections/technology-stack/types';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { useRedirect } from '@/hooks';

const PROPS_SECTIONS = {
  hero: {
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
      <TechnologyStack />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TPageProps> = async (
  context,
) => {
  const slug = context.resolvedUrl;

  return {
    props: {
      seo: (await getSeoProps(slug)).seo,
      allRedirects: (await getSeoProps(slug)).allRedirects,
    },
  };
};

export default TechnologiesPage;