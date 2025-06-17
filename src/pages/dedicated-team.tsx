import {
  Benefits,
  ContactUsForm,
  DedicatedSoftware,
  Hero,
  OurProject,
  Technologies,
  WhyCrocode,
} from '@/components/sections';

import { TImage } from '@/types/types';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'DEDICATED TEAM',
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
  ourProject: {
    title: 'OUR PROJECTS',
    cards: [
      {
        src: '/images/more.png',
        alt: 'Show More',
      },
      {
        src: '/images/more.png',
        alt: 'Show More',
      },
      {
        src: '/images/more.png',
        alt: 'Show More',
      },
    ] as [TImage, TImage, TImage],
  },
};

const DedicatedTeamPage = () => {
  return (
    <>
      <Hero
        title={PROPS_SECTIONS.hero.title}
        image={PROPS_SECTIONS.hero.image}
        modelsIsShow={PROPS_SECTIONS.hero.modelsIsShow}
      />
      <WhyCrocode />
      <DedicatedSoftware />
      <Benefits />
      <Technologies />
      <OurProject
        title={PROPS_SECTIONS.ourProject.title}
        cards={PROPS_SECTIONS.ourProject.cards}
      />
      <ContactUsForm />
    </>
  );
};

export default DedicatedTeamPage;
