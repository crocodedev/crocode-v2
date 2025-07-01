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

  if (errors) {
    console.error(errors[0].message);
  }

  return (
    <Fragment>
      <Seo {...seo} />
      <Hero title={article.title} modelsIsShow={true} />
      <AuthorArticle text={article.author} />
      <BlogContent article={article} />
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
      seo: (await getSeoProps(slug)).seo,
      allRedirects: (await getSeoProps(slug)).allRedirects,
    },
  };
}) satisfies GetServerSideProps<TProps>;

export default ArticlePage;
