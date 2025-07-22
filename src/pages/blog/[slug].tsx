import { GetServerSideProps } from 'next';
import { Fragment } from 'react';

import {
  AuthorArticle,
  BlogContent,
  Breadcrumbs,
  Hero,
  Subscribe,
} from '@/components/sections';
import { TArticle } from '@/components/sections/blog-catalog/types';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';
import { TSanityError } from '@/types/sanityError';

import { getSeoProps } from '@/utils/seo';

import { getBlogArticle } from '@/graphql/queries/blog';
import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';
import { TBreadcrumbs } from '@/components/sections/breadcrumbs/type';

type TProps = TPageProps & {
  article: TArticle;
  errors: TSanityError[];
  breadcrumbs: TBreadcrumbs;
};

const ArticlePage = ({
  article,
  errors,
  seo,
  allRedirects,
  breadcrumbs,
}: TProps) => {
  useRedirect(allRedirects);

  if (errors) {
    console.error(errors[0].message);
  }

  const { author, date, title } = article;

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <Fragment>
      <Seo {...seo} />
      <Hero title={title} />
      <Breadcrumbs sanityData={breadcrumbs} />
      <AuthorArticle text={`${author}, ${formatDate(date)}`} />
      <BlogContent {...article} />
      <Subscribe />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<TProps> = (async (
  context,
) => {
  const slug = context.params?.slug;
  const query = getBlogArticle(slug as string);

  const { data, errors } = await fetchGraphQL(query);

  const article = data?.allArticlesItem?.[0];
  return {
    props: {
      article: article ?? null,
      errors: errors ?? null,
      seo: article?.seo,
      allRedirects: (await getSeoProps(slug)).allRedirects,
      breadcrumbs: article?.breadcrumbs || null,
    },
  };
}) satisfies GetServerSideProps<TProps>;

export default ArticlePage;
