import { GetServerSideProps } from 'next';
import { Fragment } from 'react';

import {
  AboutUs,
  CardGrid,
  CardImageFive,
  ContactUsForm,
  Hero,
  Info,
} from '@/components/sections';
import { TCase } from '@/components/sections/cases/type';
import Seo from '@/components/seo';
import { TitleSection } from '@/components/ui';

import { TPageProps } from '@/types/pageProps';
import { TSanityError } from '@/types/sanityError';

import { parseHtmlToBlocks } from '@/utils/parseMarkdown';
import { getSeoProps } from '@/utils/seo';

import { getCaseItem } from '@/graphql/queries/cases';
import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';

type TProps = TPageProps & {
  caseItem: TCase;
  errors: TSanityError[];
};

const CasePage = ({ caseItem, errors, seo, allRedirects }: TProps) => {
  useRedirect(allRedirects);

  const {
    title,
    duration,
    service,
    industry,
    technologiesList,
    images,
    contentRaw,
  } = caseItem;

  const html = contentRaw?.reduce(
    (acc, elem) => acc + (elem?.children?.[0]?.text || ''),
    '',
  );

  const PROPS_SECTIONS = {
    cardImageFive: {
      cards: images?.map((el) => ({
        src: el?.image?.asset.url ?? '',
        alt: el?.altText ?? '',
      })),
      info: [
        {
          title: 'Tech',
          description: technologiesList
            ?.map((item) => item.title)
            .filter(Boolean)
            .join(', '),
        },
        {
          title: 'Duration',
          description: duration,
        },
        {
          title: 'Industry',
          description: industry,
        },
        {
          title: 'Service',
          description: service,
        },
      ],
    },
    content: html ? parseHtmlToBlocks(html) : null,
  };

  if (errors) {
    console.error(errors[0].message);
  }

  return (
    <Fragment>
      <Seo {...seo} />
      <Hero title={title} />
      <CardImageFive {...PROPS_SECTIONS.cardImageFive} />
      {PROPS_SECTIONS.content && (
        <div>
          {PROPS_SECTIONS.content.length &&
            PROPS_SECTIONS.content.map((block, i) =>
              block.type === 'list' ? (
                <CardGrid cards={block.content.cards} key={i} />
              ) : block.type === 'title' ? (
                <TitleSection label={block.content.title} />
              ) : block.type === 'text' ? (
                <Info texts={[block.content.text]} />
              ) : null,
            )}
        </div>
      )}
      <AboutUs />
      <ContactUsForm />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<TProps> = (async (
  context,
) => {
  const slug = context.params?.slug;
  const query = getCaseItem(slug as string);
  const variables = { slug };
  const { data, errors } = await fetchGraphQL(query, variables);
  const { seo, allRedirects } = await getSeoProps(slug);
  const caseItem = data?.allCasesItem?.[0] || null;

  if (!caseItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      caseItem: caseItem ?? null,
      errors: errors ?? null,
      seo,
      allRedirects,
    },
  };
}) satisfies GetServerSideProps<TProps>;

export default CasePage;
