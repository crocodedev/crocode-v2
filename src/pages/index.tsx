import { Hero } from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'crocode',
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
};

const HomePage = () => {
  return (
    <>
      <Hero
        title={PROPS_SECTIONS.hero.title}
        image={PROPS_SECTIONS.hero.image}
        modelsIsShow={PROPS_SECTIONS.hero.modelsIsShow}
      />
    </>
  );
};

export default HomePage;
