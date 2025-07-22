import { GetServerSideProps } from 'next';

import {
  AboutUs,
  Breadcrumbs,
  CardGrid,
  ContactUsForm,
  Hero,
  Info,
} from '@/components/sections';
import Seo from '@/components/seo';

import { TPageProps } from '@/types/pageProps';

import { getSeoProps } from '@/utils/seo';

import { useRedirect } from '@/hooks';
import { getBreadcrumbs } from '@/graphql/queries/breadcrumbs';
import { fetchGraphQL } from '@/lib/graphql';
import { TBreadcrumbs } from '@/components/sections/breadcrumbs/type';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: true,
    title: 'GAME DEVELOPMENT',
  },
  info: {
    title: 'What is Gamedev?',
    texts: [
      `We create games for mobile platforms, consoles and desktop computers, and deals with design development to development and support in the market. The game is a billion hypotheses that you know about at the start of development, and another 100 billion factors that you will find out about when you release the product, or you will not find out at all. We are driven by the desire and motivation to create the best products, because the development process is long and requires many complex solutions. In GameDev, the product can be constantly processed and improved. The reason for this is that the final vision of the product may differ due to the abundance of ideas. We learn what our audience likes through experimentation and constant analysis.`.toUpperCase(),
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

type TProps = TPageProps & {
  breadcrumbs: {
    data: TBreadcrumbs;
    error: string;
  };
};

const GameDevPage = ({ allRedirects, seo, breadcrumbs }: TProps) => {
  useRedirect(allRedirects);

  return (
    <>
      <Seo {...seo} />
      <Hero {...PROPS_SECTIONS.hero} />
      <Breadcrumbs sanityData={breadcrumbs?.data} />
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

export default GameDevPage;
