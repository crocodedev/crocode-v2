import { GetServerSideProps } from 'next';

import {
  Advanteges,
  Breadcrumbs,
  ContactUsForm,
  Expections,
  GetStarted,
  Hero,
  OurProject,
  Specialist,
  Technologies,
} from '@/components/sections';
import { TBreadcrumbs } from '@/components/sections/breadcrumbs/type';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { getBreadcrumbs } from '@/graphql/queries/breadcrumbs';
import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';

const PROPS_SECTIONS = {
  hero: {
    title: 'TWORZENIE OPROGRAMOWANIA NA ZAMÓWIENIE',
  },
};

type TProps = TPageProps & {
  breadcrumbs: {
    data: TBreadcrumbs;
    error: string;
  };
};

const CustomSoftwareDevelopmentPage = ({
  allRedirects,
  seo,
  breadcrumbs,
}: TProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Breadcrumbs sanityData={breadcrumbs?.data} />
      <Advanteges />
      <Specialist />
      <Expections />
      <GetStarted />
      <Technologies />
      <OurProject />
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
        data: dataBreadcrumbs?.allPage?.[0]?.breadcrumbs ?? null,
        error: errorsBreadcrumbs ?? null,
      },
    },
  };
};

export default CustomSoftwareDevelopmentPage;
