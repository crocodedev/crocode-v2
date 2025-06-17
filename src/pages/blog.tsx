import { BlogCatalog, Hero, Subscribe } from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'BLOG',
    typeText: 'main',
    image: {
      src: '/images/background.jpg',
      alt: 'background',
    },
  },
  blogCatalog: {
    category: ['Latest', 'Technologies', 'UA/UX', 'Client guides'],
  },
};

const BlogPage = () => {
  return (
    <>
      <Hero
        title={PROPS_SECTIONS.hero.title}
        image={PROPS_SECTIONS.hero.image}
        modelsIsShow={PROPS_SECTIONS.hero.modelsIsShow}
        typeText={PROPS_SECTIONS.hero.typeText}
      />
      <BlogCatalog category={PROPS_SECTIONS.blogCatalog.category} />
      <Subscribe />
    </>
  );
};

export default BlogPage;
