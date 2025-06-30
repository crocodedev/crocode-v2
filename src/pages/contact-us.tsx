import { GetServerSideProps } from 'next';

import { ContactUsForm, ContactUsMap, Hero } from '@/components/sections';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { useRedirect } from '@/hooks';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: `Tell us about your project`.toUpperCase(),
  },
};

const ContactUsPage = ({ allRedirects, seo }: TPageProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <ContactUsForm />
      <ContactUsMap />
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

export default ContactUsPage;
