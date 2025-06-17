import {
  FiltersCases,
  Hero,
  Cases as SectionCases,
  Subscribe,
} from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'cases',
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
};

const CasesPage = () => {
  return (
    <>
      <Hero
        title={PROPS_SECTIONS.hero.title}
        modelsIsShow={PROPS_SECTIONS.hero.modelsIsShow}
        image={PROPS_SECTIONS.hero.image}
      />
      <FiltersCases />
      <SectionCases />
      <Subscribe />
    </>
  );
};

export default CasesPage;
