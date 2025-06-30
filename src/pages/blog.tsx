import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { BlogCatalog, Hero, Subscribe } from '@/components/sections';
import { TArticle } from '@/components/sections/blog-catalog/types';

import { TPagination } from '@/types/pagination';
import { TSanityError } from '@/types/sanityError';

import {
  ALL_BLOG_ARTICLES,
  ITEMS_PER_PAGE,
  getBlogArticles,
} from '@/graphql/queries/blog';
import { fetchGraphQL } from '@/lib/graphql';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'BLOG',
  },
  blogCatalog: {
    category: ['Latest', 'Technologies', 'UA/UX', 'Client guides'],
  },
};

type TProps = {
  artcles: TArticle[];
  errors: TSanityError[];
  paginationData: TPagination;
};

const BlogPage = ({ artcles, errors, paginationData }: TProps) => {
  if (errors) {
    return <div>Error {errors[0].message}</div>;
  }

  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <BlogCatalog
        {...PROPS_SECTIONS.blogCatalog}
        artcles={artcles}
        paginationData={paginationData}
      />
      <Subscribe />
    </>
  );
};

export const getServerSideProps = (async (
  context: GetServerSidePropsContext,
) => {
  const { category, page } = context.query;

  const currentPage = page ? Math.max(1, parseInt(page as string)) : 1;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const { data: dataCount, errors: errorsCount } =
    await fetchGraphQL(ALL_BLOG_ARTICLES);

  if (errorsCount) {
    return {
      props: {
        artcles: [],
        errors: errorsCount,
        paginationData: {
          currentPage: 1,
          totalPages: 1,
        },
      },
    };
  }

  const queryCases = getBlogArticles(
    ITEMS_PER_PAGE,
    offset,
    category as string | undefined,
  );
  const { data: dataArticles, errors: errorsArticles } =
    await fetchGraphQL(queryCases);

  return {
    props: {
      artcles: dataArticles?.allArticlesItem,
      errors: errorsArticles || null,
      paginationData: {
        currentPage,
        totalPages: Math.ceil(
          dataCount.allArticlesItem.length / ITEMS_PER_PAGE,
        ),
      },
    },
  };
}) satisfies GetServerSideProps<TProps>;

export default BlogPage;
