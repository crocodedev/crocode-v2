import { GetServerSideProps } from 'next';

import {
  Advanteges,
  ContactUsForm,
  Expections,
  GetStarted,
  Hero,
  OurProject,
  Specialist,
  Technologies,
} from '@/components/sections';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { useRedirect } from '@/hooks';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
  },
};

const CustomSoftwareDevelopmentPage = ({ allRedirects, seo }: TPageProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
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

  return {
    props: await getSeoProps(slug),
  };
};

export default CustomSoftwareDevelopmentPage;
