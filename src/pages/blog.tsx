import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { BlogCatalog, Hero, Subscribe } from '@/components/sections';
import { TArticle } from '@/components/sections/blog-catalog/types';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';
import { TPagination } from '@/types/pagination';
import { TSanityError } from '@/types/sanityError';
import { TSeo } from '@/types/seo';

import {
  ALL_BLOG_ARTICLES,
  ITEMS_PER_PAGE,
  getBlogArticles,
} from '@/graphql/queries/blog';
import { useRedirect } from '@/hooks';
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

type TProps = TPageProps & {
  articles: TArticle[];
  errors: TSanityError[];
  paginationData: TPagination;
};

const BlogPage = ({
  articles,
  errors,
  paginationData,
  seo,
  allRedirects,
}: TProps) => {
  useRedirect(allRedirects);

  if (errors) {
    return <div>Error {errors[0].message}</div>;
  }

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <BlogCatalog
        {...PROPS_SECTIONS.blogCatalog}
        articles={articles}
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

  const seo = {
    titleTemplate: false,
    title: category || null,
    description: `Description for ${category}`,
    keywords: `${category}`,
    image: {
      altText: `${category} work technologies `,
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
        errors: errorsCount,
        paginationData: {
          currentPage: 1,
          totalPages: 1,
        },
        seo: seo,
        allRedirects: [],
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
  console.log({ data: dataArticles?.allArticlesItem });

  return {
    props: {
      articles: dataArticles?.allArticlesItem || null,
      errors: errorsArticles || null,
      seo: seo,
      allRedirects: [],
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
