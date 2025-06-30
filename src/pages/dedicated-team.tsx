import { GetServerSideProps } from 'next';

import {
  Benefits,
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

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'DEDICATED TEAM',
  },
};

const DedicatedTeamPage = ({ allRedirects, seo }: TPageProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
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

  return {
    props: await getSeoProps(slug),
  };
};

export default DedicatedTeamPage;
