import { GetServerSideProps } from 'next';

import {
  AboutUs,
  CardGrid,
  ContactUsForm,
  Hero,
  OurProject,
  Questions,
  StyleGuide,
  WhyCrocode,
} from '@/components/sections';
import { TTechnologies } from '@/components/sections/technologies/data';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';
import { TSanityError } from '@/types/sanityError';

import { smartNumber } from '@/utils/number';
import { getSeoProps } from '@/utils/seo';

import { getTechnology } from '@/graphql/queries/technologies';
import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';

type TProps = TPageProps & {
  technology: TTechnologies;
  errors: TSanityError[];
};

const TechnologyPage = ({ technology, errors, seo, allRedirects }: TProps) => {
  useRedirect(allRedirects);

  const { title = '', questions, process, projects, contentRaw } = technology;

  const PROPS_SECTIONS = {
    hero: {
      title,
    },
    description: contentRaw,
    questions: questions?.map((item, index) => ({
      id: smartNumber(index + 1),
      text: item.question,
      answer: item.answer,
    })),
    cardGrid: {
      title: 'Our process',
      cards: process?.map((item) => ({
        title: item.titleItem,
        text: item.description,
      })),
    },
    ourProject: {
      cards: projects
        ?.map((project) => ({
          image: {
            src: project?.casesItemImage?.image.asset.url || '',
            alt: project?.casesItemImage?.altText || '',
          },
          href: project?.slug?.current || '#',
        }))
        .splice(0, 3),
    },
  };

  if (errors) {
    console.error(errors[0].message);
  }

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      {PROPS_SECTIONS.description && (
        <StyleGuide value={PROPS_SECTIONS.description} />
      )}
      <OurProject {...PROPS_SECTIONS.ourProject} />
      <Questions questions={PROPS_SECTIONS.questions} />
      <CardGrid {...PROPS_SECTIONS.cardGrid} />
      <WhyCrocode />
      <AboutUs />
      <ContactUsForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TProps> = (async (
  context,
) => {
  const slug = context.params?.slug as string;

  const { data, errors } = await fetchGraphQL(getTechnology(slug));
  const technology = data?.allTechnologies?.[0] || null;
  const { seo, allRedirects } = await getSeoProps(`/technology/${slug}`);

  if (!technology) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      technology: technology || null,
      errors: errors || null,
      seo,
      allRedirects,
    },
  };
}) satisfies GetServerSideProps<TProps>;

export default TechnologyPage;