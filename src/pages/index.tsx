import { GetServerSideProps } from 'next';

import {
  AboutUs,
  Banner,
  Blog,
  Breadcrumbs,
  ContactUsForm,
  GetStarted,
  Hero,
  Industries,
  OfferingsTemplate,
  OurProject,
  Technologies,
} from '@/components/sections';
import Seo from '@/components/seo';
import { AnchorType } from '@/components/ui/title/types';

import useRedirect from '@/hooks/useRedirect';

import { TLink } from '@/types/link';
import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'crocode',
    typeText: 'main',
  },
  offeringsTemplate: {
    title: 'Usługi',
    modelsIsShow: true,
    anchor: 'right' as AnchorType,
  },
  banner: {
    title: 'O Crocode',
    texts: [
      `Crocode to wiodąca firma technologiczna świadcząca kompleksowe usługi rozwoju aplikacji mobilnych i webowych, rozwiązań w zakresie UX/UI designu oraz rozwiązań biznesowych dla e-commerce i zarządzania projektami. Zawsze koncentrujemy się na doskonałości technologicznej, aby zapewnić najwyższą jakość. Nasz zespół składa się z developerów pracujących z różnymi technologiami, takimi jak: Shopify, JS, Gatsby.js, React i inne. Zespół Crocode jest gotów przekształcić i rozwinąć Twój biznes poprzez e-commerce i platformy marketplace.`,
    ],
    showModels: false,
  },
  blog: {
    title: 'BLOG',
    cards: ['1', '2', '3', '4'],
    linkDetails: {
      text: 'Dowiedz się więcej',
      href: '/blog',
    } as TLink,
  },
};

const HomePage = ({ seo, allRedirects }: TPageProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Breadcrumbs />
      <Industries />
      <OfferingsTemplate {...PROPS_SECTIONS.offeringsTemplate} />
      <Banner {...PROPS_SECTIONS.banner} />
      <Technologies />
      <GetStarted />
      <OurProject />
      <AboutUs />
      <Blog {...PROPS_SECTIONS.blog} />
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

export default HomePage;
