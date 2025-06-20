import { BlogCatalog, Hero, Subscribe } from '@/components/sections';

const PROPS_SECTIONS = {
  hero: {
    modelsIsShow: false,
    title: 'BLOG',
  },
  blogCatalog: {
    category: ['Latest', 'Technologies', 'UA/UX', 'Client guides'],
  },
};

const BlogPage = () => {
  return (
    <>
      <Hero {...PROPS_SECTIONS.hero} />
      <BlogCatalog {...PROPS_SECTIONS.blogCatalog} />
      <Subscribe />
    </>
  );
};

export default BlogPage;
