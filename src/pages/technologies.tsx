import { Hero, TechnologyStack } from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'OUR TECHNOLOGY STACK',
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
};

const TechnologiesPage = () => {
  return (
    <>
      <Hero
        title={PROPS_SECTIONS.hero.title}
        image={PROPS_SECTIONS.hero.image}
        modelsIsShow={PROPS_SECTIONS.hero.modelsIsShow}
      />
      <TechnologyStack />
    </>
  );
};

export default TechnologiesPage;
