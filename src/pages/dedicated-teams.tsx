import { GetServerSideProps } from 'next';

import {
  Benefits,
  Breadcrumbs,
  ContactUsForm,
  DedicatedSoftware,
  Hero,
  OurProject,
  Technologies,
  WhyCrocode,
} from '@/components/sections';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { useRedirect } from '@/hooks';
import { fetchGraphQL } from '@/lib/graphql';
import { getBreadcrumbs } from '@/graphql/queries/breadcrumbs';
import { TBreadcrumbs } from '@/components/sections/breadcrumbs/type';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'DEDICATED TEAM',
  },
};

type TProps = TPageProps & {
  breadcrumbs: {
    data: TBreadcrumbs;
    error: string;
  };
};

const DedicatedTeamPage = ({ allRedirects, seo, breadcrumbs }: TProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Breadcrumbs sanityData={breadcrumbs?.data} />
      <WhyCrocode />
      <DedicatedSoftware />
      <Benefits />
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

  console.log(slug);

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

export default DedicatedTeamPage;
