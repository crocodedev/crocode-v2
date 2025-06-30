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
    title: 'FRONT-END DEVELOPMENT',
  },
  info: {
    title: 'What is Front-end?',
    texts: [
      `As digital technology progresses at an unprecedented pace, the demand for advanced frontend development services grows stronger. This demand stems from the vital role front-end development plays in web creation, being responsible for the interactive and visual aspects of a website that users directly interact with.Front-end developers at Crocode convert complex backend codes into an engaging user interface using a variety of computer languages. Our team designs and develops various elements of a website, such as buttons, navigation panels, graphics interface, animations, and content layout. In addition to websites, our frontend development service also includes the creation of web software and applications that cater to diverse industry needs.`.toUpperCase(),
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

const FrontEndDevelopmentPage = ({ allRedirects, seo }: TPageProps) => {
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

export default FrontEndDevelopmentPage;
