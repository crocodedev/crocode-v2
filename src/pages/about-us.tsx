import {
  AboutUs,
  Blog,
  ContactUsForm,
  GetStarted,
  Hero,
  OurFigures,
} from '@/components/sections';

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

const AboutUsPage = () => {
  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <OurFigures />
      <GetStarted />
      <Blog {...PROPS_SECTIONS.blog} />
      <AboutUs />
      <ContactUsForm />
    </>
  );
};

export default AboutUsPage;
