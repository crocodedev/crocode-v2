'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useStoreContext } from '@/components/store-context';
import { Cases, FiltersCases, Hero, Subscribe } from '@/components/sections';
import Seo from '@/components/seo';
import { TCase } from '@/components/sections/cases/type';
import { TSeo } from '@/types/seo';
import { TSanityError } from '@/types/sanityError';
import { TPageProps } from '@/types/pageProps';
import {
  ALL_CASES_ITEMS,
  DEFAULT_VALUE_ALL_COUNTRY,
  ITEMS_PER_PAGE,
} from '@/graphql/queries/cases';
import { fetchGraphQL } from '@/lib/graphql';

const PROPS_SECTIONS = {
  hero: { title: 'cases' },
};

type TProps = TPageProps & {
  cases: TCase[];
  errors: TSanityError[];
  initialTech: string[];
  countries: string[];
};

const CasesPage = ({ cases, errors, initialTech, countries, seo }: TProps) => {
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
      <div id='cases-top'>
        <FiltersCases
          tech={effectiveTech}
          countries={effectiveCountries}
          setSelect={handleSelectCountry}
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

export const getStaticProps = async () => {
  const defaultSeo = {
    titleTemplate: false,
    title: DEFAULT_VALUE_ALL_COUNTRY,
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
    const { data, errors } = await fetchGraphQL(ALL_CASES_ITEMS);

    if (errors) throw new Error(errors[0]?.message);

    const technologiesAll = Array.from(
      new Set(
        data.allCasesItem?.flatMap(
          (item: TCase) =>
            item.technologiesList?.map((tech) => tech?.title).filter(Boolean) ||
            [],
        ),
      ),
    );

    const countries = Array.from(
      new Set(
        data.allCasesItem?.map((item: TCase) => item.country).filter(Boolean) ||
          [],
      ),
    );

    return {
      props: {
        seo: defaultSeo,
        cases: data.allCasesItem || [],
        errors: null,
        initialTech: technologiesAll,
        countries,
      },
      revalidate: 60,
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
      },
    };
  }
};

export default CasesPage;
