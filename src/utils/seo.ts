import getSeoBySlug from '@/graphql/queries/seo';
import { fetchGraphQL } from '@/lib/graphql';

const DEFAULT_SEO = {
  siteUrl: '',
  title: 'Crocode',
  titleTemplate: false,
  keywords: '',
  ogtype: 'og:type',
  twitterCard: '',
  image: {},
};

export const getSeoProps = async (slug: string | string[] | undefined) => {
  const query = getSeoBySlug(slug);
  const graphqlResponse = await fetchGraphQL(query);
  const pageData = graphqlResponse?.data?.allPage[0];
  const allRedirects = graphqlResponse.data.allRedirect;

  return {
    seo: pageData?.seo ?? DEFAULT_SEO,
    allRedirects,
  };
};
