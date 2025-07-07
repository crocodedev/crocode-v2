import { GetServerSideProps } from 'next';

import {
  Hero,
  ContactUsForm,
  OurProject,
  Questions,
  // CardGrid,
  WhyCrocode,
  AboutUs,
} from '@/components/sections';
import Seo from '@/components/seo';
import { getCaseItem } from '@/graphql/queries/cases';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { useRedirect } from '@/hooks';
import { TCase } from '@/components/sections/cases/type';
import { TSanityError } from '@/types/sanityError';
import { fetchGraphQL } from '@/lib/graphql';

type TProps = TPageProps & {
  technology: TCase;
  errors: TSanityError[];
};

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'OUR TECHNOLOGY STACK',
  },
};

const TechnologyPage = ({ technology, errors, seo, allRedirects }: TProps) => {
  useRedirect(allRedirects);

  if (errors) {
    console.error(errors[0].message);
  }

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <OurProject />
      <Questions />
      {/* <CardGrid /> */}
      <WhyCrocode />
      <AboutUs />
      <ContactUsForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TProps> = (async (
  context,
) => {
  const slug = context.params?.slug;

  const query = getCaseItem(slug as string);

  const variables = { slug };
  const { data, errors } = await fetchGraphQL(query, variables);
  const technologyItem = data?.allCasesItem?.[0] || null;

  return {
    props: {
      technology: technologyItem ?? null,
      errors: errors ?? null,
      seo: (await getSeoProps(slug)).seo,
      allRedirects: (await getSeoProps(slug)).allRedirects,
    },
  };
}) satisfies GetServerSideProps<TProps>;

export default TechnologyPage;
