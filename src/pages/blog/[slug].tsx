import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import {
  AuthorArticle,
  BlogContent,
  Hero,
  Subscribe,
} from '@/components/sections';
import { TArticle } from '@/components/sections/blog-catalog/types';

import { TSanityError } from '@/types/sanityError';

import { getBlogArticle } from '@/graphql/queries/blog';
import { fetchGraphQL } from '@/lib/graphql';

type TProps = {
  article: TArticle | null;
  errors: TSanityError[];
};

const ArticlePage = ({ article, errors }: TProps) => {
  const router = useRouter();

  if (errors) {
    return <div>Error {errors[0].message}</div>;
  }

  if (router.isFallback) return <div>Loading...</div>;

  if (!article) return <div>Not found</div>;

  return (
    <Fragment>
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
    },
  };
}) satisfies GetServerSideProps<TProps>;

export default ArticlePage;
