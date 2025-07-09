import { GetServerSideProps } from 'next';
import { Fragment } from 'react';
import {
  AboutUs,
  ContactUsForm,
  Hero,
  CardImageFive,
  CardGrid,
  Info,
} from '@/components/sections';
import { TitleSection } from '@/components/ui';
import { TCase } from '@/components/sections/cases/type';
import Seo from '@/components/seo';
import { TPageProps } from '@/types/pageProps';
import { TSanityError } from '@/types/sanityError';
import { getSeoProps } from '@/utils/seo';
import { getCaseItem } from '@/graphql/queries/cases';
import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';
import { parseHtmlToBlocks } from '@/utils/parseMarkdown';

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

  const html = contentRaw[0].children[0].text;

  const PROPS_SECTIONS = {
    cardImageFive: {
      cards: images.map((el) => ({
        src: el.image.asset.url,
        alt: el.altText,
      })),
      info: [
        {
          title: 'Tech',
          description: technologiesList
            .map((item) => item.title)
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
    content: parseHtmlToBlocks(html),
  };

  console.log(PROPS_SECTIONS.content);

  if (errors) {
    console.error(errors[0].message);
  }

  return (
    <Fragment>
      <Seo {...seo} />
      <Hero title={title} />
      <CardImageFive {...PROPS_SECTIONS.cardImageFive} />
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
  console.log(data.allCasesItem);
  const caseItem = data?.allCasesItem?.[0] || null;
  const { seo, allRedirects } = await getSeoProps(slug);

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
