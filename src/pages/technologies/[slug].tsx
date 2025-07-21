import { GetServerSideProps } from 'next';
import { Fragment } from 'react';

import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';
import { TSanityError } from '@/types/sanityError';

import { getSeoProps } from '@/utils/seo';

import { getBlogArticle } from '@/graphql/queries/blog';
import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';

type TProps = TPageProps & {
  errors: TSanityError[];
};

const TechnologiePage = ({ errors, seo, allRedirects }: TProps) => {
  useRedirect(allRedirects);

  if (errors) {
    console.error(errors[0].message);
  }

  return (
    <Fragment>
      <Seo {...seo} />
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
      technologie: article ?? null,
      errors: errors ?? null,
      seo: (await getSeoProps(slug)).seo,
      allRedirects: (await getSeoProps(slug)).allRedirects,
    },
  };
}) satisfies GetServerSideProps<TProps>;

export default TechnologiePage;
