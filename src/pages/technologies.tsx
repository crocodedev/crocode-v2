import { Hero, TechnologyStack } from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'OUR TECHNOLOGY STACK',
  },
};

const TechnologiesPage = () => {
  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <TechnologyStack />
    </>
  );
};

export default TechnologiesPage;
