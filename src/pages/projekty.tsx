'use client';

import { GetServerSideProps } from 'next';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  Breadcrumbs,
  Cases,
  FiltersCases,
  Hero,
  Subscribe,
} from '@/components/sections';
import { TBreadcrumbs } from '@/components/sections/breadcrumbs/type';
import { TCase } from '@/components/sections/cases/type';
import Seo from '@/components/seo';
import { useStoreContext } from '@/components/store-context';

import { TPageProps } from '@/types/pageProps';
import { TSanityError } from '@/types/sanityError';
import { TSeo } from '@/types/seo';

import { getBreadcrumbs } from '@/graphql/queries/breadcrumbs';
import { ALL_CASES_ITEMS, ITEMS_PER_PAGE } from '@/graphql/queries/cases';
import { fetchGraphQL } from '@/lib/graphql';

const PROPS_SECTIONS = {
  hero: { title: 'projekty' },
};

type TProps = TPageProps & {
  cases: TCase[];
  errors: TSanityError[];
  initialTech: string[];
  countries: string[];
  breadcrumbs: {
    data: TBreadcrumbs;
    error: string;
  };
};

const CasesPage = ({
  cases,
  errors,
  initialTech,
  countries,
  seo,
  breadcrumbs,
}: TProps) => {
  const { casesData, setCasesData } = useStoreContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectCountry, setSelectCountry] = useState<string[]>([]);
  const [selectTechnology, setSelectTechnology] = useState<string[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (
      !initialized.current &&
      cases.length > 0 &&
      casesData.casesAll.length === 0
    ) {
      initialized.current = true;
      setCasesData({
        casesAll: cases,
        technologies: initialTech,
        countries: countries,
      });
    }
  }, [cases, initialTech, countries]);

  const { effectiveCases, effectiveTech, effectiveCountries } = useMemo(
    () => ({
      effectiveCases:
        casesData.casesAll.length > 0 ? casesData.casesAll : cases,
      effectiveTech:
        casesData.technologies.length > 0
          ? casesData.technologies
          : initialTech,
      effectiveCountries:
        casesData.countries.length > 0 ? casesData.countries : countries,
    }),
    [casesData, cases, initialTech, countries],
  );

  const filteredCases = useMemo(() => {
    setCurrentPage(1);
    return effectiveCases.filter((item) => {
      const countryMatch =
        selectCountry.length === 0 ||
        selectCountry.includes(item.country || '');

      const techMatch =
        selectTechnology.length === 0 ||
        (item.technologiesList || []).some(
          (tech) => tech?.title && selectTechnology.includes(tech.title),
        );
      return countryMatch && techMatch;
    });
  }, [effectiveCases, selectCountry, selectTechnology]);

  const totalPages = Math.ceil(filteredCases.length / ITEMS_PER_PAGE);
  const paginatedCases = useMemo(() => {
    const page = Math.min(currentPage, totalPages || 1);
    return filteredCases.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE,
    );
  }, [filteredCases, currentPage, totalPages]);

  const handleSelectCountry = useCallback((country: string) => {
    setSelectCountry((prev) => (prev[0] === country ? [] : [country]));
  }, []);

  const handleSelectTechnologies = useCallback((tech: string) => {
    setSelectTechnology((prev) =>
      prev.includes(tech) ? prev.filter((el) => el !== tech) : [...prev, tech],
    );
  }, []);

  const handleChangePage = useCallback((page: number) => {
    setCurrentPage(page);
    window.requestAnimationFrame(() => {
      document
        .getElementById('cases-top')
        ?.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  if (errors?.length > 0) {
    console.error(`Error: ${errors[0]?.message}`);
    return <div>Error loading cases</div>;
  }

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Breadcrumbs sanityData={breadcrumbs?.data} />
      <div id='cases-top'>
        <FiltersCases
          tech={effectiveTech}
          countries={effectiveCountries}
          setSelectCountry={handleSelectCountry}
          selectCountry={selectCountry}
          setSelectTech={handleSelectTechnologies}
          selectTechnology={selectTechnology}
        />
        <Cases
          cases={paginatedCases}
          paginationData={{ currentPage, totalPages }}
          paginationEvent={handleChangePage}
        />
      </div>
      <Subscribe />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.resolvedUrl;

  const defaultSeo = {
    titleTemplate: false,
    title: 'Cases',
    description: 'Description for cases page',
    image: {
      altText: 'Cases',
      image: {
        asset: {
          url: 'https://cdn.sanity.io/images/kx2cy1wz/production/49421dd260db3c7fb4200b3c687c1e1f88b1801f-717x137.svg',
        },
      },
    },
  } as TSeo;

  try {
    const { data: casesData, errors: errorsCases } =
      await fetchGraphQL(ALL_CASES_ITEMS);

    const { data: dataBreadcrumbs, errors: errorsBreadcrumbs } =
      await fetchGraphQL(getBreadcrumbs(slug));

    if (errorsCases) throw new Error(errorsCases[0]?.message);
    else if (errorsBreadcrumbs) throw new Error(errorsCases[0]?.message);

    const technologiesAll = Array.from(
      new Set(
        casesData.allCasesItem?.flatMap(
          (item: TCase) =>
            item.technologiesList?.map((tech) => tech?.title).filter(Boolean) ||
            [],
        ),
      ),
    );

    const countries = Array.from(
      new Set(
        casesData.allCasesItem
          ?.map((item: TCase) => item.country)
          .filter(Boolean) || [],
      ),
    );

    return {
      props: {
        seo: defaultSeo,
        cases: casesData.allCasesItem || [],
        errors: null,
        initialTech: technologiesAll,
        countries,
        breadcrumbs: {
          data: dataBreadcrumbs?.allPage?.[0]?.breadcrumbs ?? null,
          error: errorsBreadcrumbs ?? null,
        },
      },
    };
  } catch (error) {
    console.error('Failed to load cases:', error);
    return {
      props: {
        seo: defaultSeo,
        cases: [],
        errors: [
          { message: error instanceof Error ? error.message : 'Unknown error' },
        ],
        initialTech: [],
        countries: [],
        breadcrumbs: {
          data: null,
          error: null,
        },
      },
    };
  }
};

export default CasesPage;
