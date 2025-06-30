import { GetServerSideProps } from 'next';

import {
  AboutUs,
  Blog,
  ContactUsForm,
  GetStarted,
  Hero,
  OurFigures,
} from '@/components/sections';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { useRedirect } from '@/hooks';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'ABOUT US',
  },
  blog: {
    title: 'BLOG',
    linkDetails: {
      text: 'Learn in detail',
      href: '/',
    },
  },
};

const AboutUsPage = ({ allRedirects, seo }: TPageProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <OurFigures />
      <GetStarted />
      <Blog {...PROPS_SECTIONS.blog} />
      <AboutUs />
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

export default AboutUsPage;
