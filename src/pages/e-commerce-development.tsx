import { GetServerSideProps } from 'next';

import {
  AboutUs,
  CardGrid,
  ContactUsForm,
  Hero,
  Info,
} from '@/components/sections';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { useRedirect } from '@/hooks';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'E-COMMERCE DEVELOPMENT',
  },
  info: {
    title: 'What is E-commerce development?',
    texts: [
      `Welcome to Crocode, a leading name in the domain of e-commerce development service. We are an IT firm that has carved a unique niche in the field of digital commerce, offering bespoke e-commerce solutions that empower businesses to provide their customers with exceptional shopping experiences.`.toUpperCase(),
    ],
  },
  cardGrid: {
    title: 'Our process',
    cards: [
      {
        title: 'Deployment and Launch',
        text: `Once testing is complete, the project is ready for deployment. This phase involves setting up the project on the client's servers or the appropriate hosting environment. Thorough deployment procedures ensure a smooth transition from development to production.`,
        color: 'green',
      },
      {
        title: 'Project Planning',
        text: `Based on the gathered requirements, our team develops a comprehensive project plan. This includes defining project scope, timelines, resources needed, technology stack, milestones, and potential risks.`,
      },
      {
        title: 'Testing and Quality Assurance',
        text: `We subject the software to rigorous testing to identify and rectify any bugs, glitches, or inconsistencies. This includes functional, performance, security, and usability testing to guarantee that the end product meets the highest standards of quality.`,
        color: 'green',
      },
      {
        title: 'Design and Architecture',
        text: `The design phase involves creating wireframes, prototypes, and user interface designs. For software development projects, the architectural design is crucial, outlining the software's structure, components, and technologies to be used. This phase ensures that both the visual and technical aspects are well thought out.`,
      },
      {
        title: 'Deployment and Launch',
        text: `Once testing is complete, the project is ready for deployment. This phase involves setting up the project on the client's servers or the appropriate hosting environment. Thorough deployment procedures ensure a smooth transition from development to production.`,
        color: 'black',
      },
    ],
  },
};

const ECommercePage = ({ allRedirects, seo }: TPageProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Info {...PROPS_SECTIONS.info} />
      <CardGrid {...PROPS_SECTIONS.cardGrid} />
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

export default ECommercePage;
