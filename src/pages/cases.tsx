import { GetServerSideProps } from 'next';

import { Cases, FiltersCases, Hero, Subscribe } from '@/components/sections';
import { TCase } from '@/components/sections/cases/type';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';
import { TPagination } from '@/types/pagination';
import { TSanityError } from '@/types/sanityError';
import { TSeo } from '@/types/seo';

import {
  ALL_CASES_ITEMS,
  DEFAULT_VALUE_ALL_COUNTRY,
  ITEMS_PER_PAGE,
  getCasesItems,
} from '@/graphql/queries/cases';
import { fetchGraphQL } from '@/lib/graphql';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'cases',
  },
};

const DEFAULT_FILTERS_TECH = [
  'Gatsby',
  'React',
  'CMS',
  'Sanity',
  'TypeScript',
  'EmotionJS',
  'NextJS',
  'Canvas',
  'JavaScript',
  'HTML',
  'CSS',
  'Shopify Liquid',
];

type TProps = TPageProps & {
  cases: TCase[];
  errors: TSanityError[];
  initialTech: string[];
  paginationData: TPagination;
};

const CasesPage = ({
  cases,
  errors,
  paginationData,
  initialTech,
  seo,
}: TProps) => {
  if (errors?.length > 0) {
    console.error(`Error ${errors[0]?.message}`);
  }

  const filteredCases =
    initialTech.length > 0
      ? initialTech
      : Array.from(
          new Set(
            cases
              ?.flatMap((item: TCase) => item.technologies)
              .filter(Boolean) ?? [],
          ),
        );

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <FiltersCases tech={filteredCases} />
      <Cases cases={cases} paginationData={paginationData} />
      <Subscribe />
    </>
  );
};

export const getServerSideProps = (async (context) => {
  const { tech, country, page } = context.query;
  const currentPage = page ? Math.max(1, parseInt(page as string)) : 1;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const seoTitle =
    country && country.length > 1 ? country : DEFAULT_VALUE_ALL_COUNTRY;
  const seo = {
    titleTemplate: false,
    title: seoTitle,
    description: `Description for ${country}`,
    keywords: `${country}`,
    image: {
      altText: 'Cases',
      image: {
        asset: {
          url: 'https://cdn.sanity.io/images/kx2cy1wz/production/49421dd260db3c7fb4200b3c687c1e1f88b1801f-717x137.svg',
        },
      },
    },
    ogType: 'og:type',
    twitterCard: '',
  } as TSeo;

  try {
    const techArr =
      typeof tech === 'string'
        ? tech.split(',')
        : Array.isArray(tech)
          ? tech
          : [];

    const { data: dataCount, errors: errorsCount } =
      await fetchGraphQL(ALL_CASES_ITEMS);

    if (errorsCount) {
      throw new Error(errorsCount[0].message);
    }

    const queryCases = getCasesItems(
      ITEMS_PER_PAGE,
      offset,
      country as string | undefined,
    );

    const { data: dataCases, errors: errorsCases } =
      await fetchGraphQL(queryCases);

    let filteredCases = dataCases?.allCasesItem || [];

    if (techArr.length > 0) {
      filteredCases = filteredCases.filter((item: TCase) =>
        item.technologies?.some((t: string) => techArr.includes(t)),
      );
    }

    return {
      props: {
        seo: seo,
        allRedirects: [],
        cases: filteredCases,
        errors: errorsCases || null,
        initialTech:
          !techArr.length || filteredCases.length === 0
            ? DEFAULT_FILTERS_TECH
            : [],
        paginationData: {
          currentPage,
          totalPages: Math.ceil(dataCount.allCasesItem.length / ITEMS_PER_PAGE),
        },
      },
    };
  } catch (error: unknown) {
    console.error(error);
    return {
      props: {
        seo: seo,
        allRedirects: [],
        cases: [],
        initialTech: DEFAULT_FILTERS_TECH,
        errors: [
          { message: error instanceof Error ? error.message : 'Unknown error' },
        ],
        paginationData: {
          currentPage: 1,
          totalPages: 1,
        },
      },
    };
  }
}) satisfies GetServerSideProps<TProps>;

export default CasesPage;
