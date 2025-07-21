import { GetServerSideProps } from 'next';
import { Fragment } from 'react';

import {
  AuthorArticle,
  BlogContent,
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

type TProps = TPageProps & {
  article: TArticle;
  errors: TSanityError[];
};

const ArticlePage = ({ article, errors, seo, allRedirects }: TProps) => {
  useRedirect(allRedirects);
  console.log({ article });

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
    },
  };
}) satisfies GetServerSideProps<TProps>;

export default ArticlePage;
