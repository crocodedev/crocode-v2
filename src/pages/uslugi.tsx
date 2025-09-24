import { GetServerSideProps } from 'next';

import {
  AboutUs,
  Breadcrumbs,
  ContactUsForm,
  Hero,
  OfferingsTemplate,
  Questions,
} from '@/components/sections';
import { TBreadcrumbs } from '@/components/sections/breadcrumbs/type';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { getBreadcrumbs } from '@/graphql/queries/breadcrumbs';
import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';

export const PROPS_SECTIONS = {
  hero: {
    title: 'NASZE USŁUGI',
  },
  offeringsTemplate: {
    title: 'co możemy',
  },
};

type TProps = TPageProps & {
  breadcrumbs: {
    data: TBreadcrumbs;
    error: string;
  };
};

const ServicesPage = ({ allRedirects, seo, breadcrumbs }: TProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Breadcrumbs sanityData={breadcrumbs?.data} />
      <OfferingsTemplate {...PROPS_SECTIONS.offeringsTemplate} />
      <Questions />
      <AboutUs />
      <ContactUsForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TPageProps> = async (
  context,
) => {
  const slug = context.resolvedUrl;

  const { allRedirects, seo } = await getSeoProps(slug);
  const { data: dataBreadcrumbs, errors: errorsBreadcrumbs } =
    await fetchGraphQL(getBreadcrumbs(slug));

  return {
    props: {
      allRedirects,
      seo,
      breadcrumbs: {
        error: errorsBreadcrumbs ?? null,
        data: dataBreadcrumbs?.allPage[0]?.breadcrumbs ?? null,
      },
    },
  };
};

export default ServicesPage;
