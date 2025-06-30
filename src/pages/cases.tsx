import { GetServerSideProps } from 'next';

import { Cases, FiltersCases, Hero, Subscribe } from '@/components/sections';
import { TCase } from '@/components/sections/cases/type';

import { TPagination } from '@/types/pagination';
import { TSanityError } from '@/types/sanityError';

import {
  ALL_CASES_ITEMS,
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

type TProps = {
  cases: TCase[];
  errors: TSanityError[];
  paginationData: TPagination;
};

const CasesPage = ({ cases, errors, paginationData }: TProps) => {
  if (errors?.length > 0) {
    return <span>Error {errors[0]?.message}</span>;
  }

  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <FiltersCases />
      <Cases cases={cases} paginationData={paginationData} />
      <Subscribe />
    </>
  );
};

export const getServerSideProps = (async (context) => {
  try {
    const { tech, country, page } = context.query;

    const currentPage = page ? Math.max(1, parseInt(page as string)) : 1;
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

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
        cases: filteredCases,
        errors: errorsCases || null,
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
        cases: [],
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
