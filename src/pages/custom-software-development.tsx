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

import { TImage } from '@/types/image';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
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

const CustomSoftwareDevelopmentPage = () => {
  return (
    <>
      <Hero
        title={PROPS_SECTIONS.hero.title}
        image={PROPS_SECTIONS.hero.image}
        modelsIsShow={PROPS_SECTIONS.hero.modelsIsShow}
      />
      <Advanteges />
      <Specialist />
      <Expections />
      <GetStarted />
      <Technologies />
      <OurProject
        title={PROPS_SECTIONS.ourProject.title}
        cards={PROPS_SECTIONS.ourProject.cards}
      />
      <ContactUsForm />
    </>
  );
};

export default CustomSoftwareDevelopmentPage;
