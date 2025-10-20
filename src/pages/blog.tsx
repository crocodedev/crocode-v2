import { GetServerSideProps } from 'next';

import {
  BlogCatalog,
  Breadcrumbs,
  Hero,
  Subscribe,
} from '@/components/sections';
import { TArticle } from '@/components/sections/blog-catalog/types';
import { TBreadcrumbs } from '@/components/sections/breadcrumbs/type';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';
import { TPagination } from '@/types/pagination';
import { TSanityError } from '@/types/sanityError';
import { TSeo } from '@/types/seo';

import { ALL_BLOG_ARTICLES } from '@/graphql/queries/blog';
import { getBreadcrumbs } from '@/graphql/queries/breadcrumbs';
import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';

const PROPS_SECTIONS = {
  hero: {
    title: 'BLOG',
  },
};

type TProps = TPageProps & {
  articles: TArticle[];
  category: string[];
  errors: TSanityError[];
  paginationData: TPagination;
  breadcrumbs: {
    data: TBreadcrumbs;
    error: string;
  };
};

const BlogPage = ({
  articles,
  category,
  errors,
  seo,
  allRedirects,
  breadcrumbs,
}: TProps) => {
  useRedirect(allRedirects);

  if (errors) {
    return <div>Error {errors[0].message}</div>;
  }

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Breadcrumbs sanityData={breadcrumbs.data} />
      <BlogCatalog {...{ category, articles }} />
      <Subscribe />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.resolvedUrl;

  const { data: dataCount, errors: errorsCount } =
    await fetchGraphQL(ALL_BLOG_ARTICLES);

  const { data: dataBreadcrumbs, errors: errorsBreadcrumbs } =
    await fetchGraphQL(getBreadcrumbs(slug));

  const category = Array.from(
    new Set(
      dataCount?.allArticlesItem
        ?.map((item: TArticle) => item.category)
        .filter(Boolean) || [],
    ),
  );

  const seo = {
    titleTemplate: false,
    title:
      'Blog Crocode – Eksperckie artykuły o Shopify, AI, automatyzacji i UX',
    description: `Na blogu CrocodeLab znajdziesz przewodniki, analizy i case studies dotyczące sklepów internetowych na Shopify, sztucznej inteligencji w e-commerce, automatyzacji procesów oraz nowoczesnego UX/UI. Zapisz się i rozwijaj swój biznes online z ekspertami.`,
    keywords: `blog o e-commerce, blog Shopify Polska, rozwój e-commerce w Polsce, skuteczny marketing w e-commerce, projektowanie UX dla sklepów internetowych, optymalizacja doświadczenia użytkownika, UX e-commerce, UI dla e-commerce, customer experience w sklepie online`,
    image: {
      altText: `blogs work technologies `,
      image: {
        asset: {
          url: 'https://cdn.sanity.io/images/kx2cy1wz/production/f3b07df48aeb165cf91733613c71971a68717479-860x660.jpg',
        },
      },
    },
    ogType: 'og:type',
    twitterCard: '',
  } as TSeo;

  if (errorsCount) {
    return {
      props: {
        articles: [],
        category: [],
        errors: errorsCount,
        seo: seo,
        allRedirects: [],
        breadcrumbs: {
          data: [],
          error: null,
        },
      },
    };
  }

  return {
    props: {
      articles: dataCount?.allArticlesItem || null,
      category,
      errors: errorsCount || null,
      seo: seo,
      allRedirects: [],
      breadcrumbs: {
        data: dataBreadcrumbs?.allPage?.[0]?.breadcrumbs ?? null,
        error: errorsBreadcrumbs ?? null,
      },
    },
  };
};

export default BlogPage;
